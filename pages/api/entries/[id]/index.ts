import type { NextApiRequest, NextApiResponse } from 'next'
import { Entry, IEntry } from '../../../../models';
import mongoose from 'mongoose';
import { db } from '../../../../database';

type Data = 
 | {message: string}
 | IEntry[]
 | IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  if(!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es valido'+id });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntry(req, res);
    default:
      return res.status(200).json({ message: 'El endpoint no existe' })
  }

}

const getEntry = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  // if(!mongoose.isValidObjectId(id)) {
  //   return res.status(400).json({ message: 'El id no es valido'+id });
  // }

  await db.connect();
  const entryIndDB = await Entry.findById(id);
  await db.disconnect();

  if(!entryIndDB) {
    return res.status(404).json({ message: 'El entry no existe' });
  }
  return res.status(200).json(entryIndDB);
}

const updateEntry = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);
  if(!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: 'No se encontro el entry' });
  }

  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;
  
  try {
  
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { new: true , runValidators: true});
    
  
    await db.disconnect();
  
    res.status(200).json(updatedEntry!);
    
  } catch (error:any) {
    // console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }

}