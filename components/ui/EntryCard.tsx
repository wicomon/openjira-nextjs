import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { DragEvent, FC, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';
import { getFormatDistanceToNow } from '../../utils/dateFunctions';

interface Props{
  entry: Entry;
}


export const EntryCard:FC<Props> = ({entry}) => {

  const {startDragging, endDragging} = useContext(UIContext);

  const router = useRouter();

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);
    // console.log(event);
    startDragging();
  }
  const onDragEnd = (event: DragEvent) => {
    // console.log(event);
    endDragging();
  }
  return (
    <Card
      onClick={() => {router.push(`/entries/${entry._id}`)}}
      sx={{marginBottom: 1}}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}} >
          {/* <Typography variant='body2'>{entry.createdAt}asd</Typography> */}
          <Typography variant='body2'>Creado hace : {getFormatDistanceToNow(entry.createdAt)}</Typography>
        </CardActions>
      </CardActionArea>
      
    </Card>
  )
}
