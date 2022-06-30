import axios from 'axios';

const entriesAPI = axios.create({
  baseURL: '/api',
});

export default entriesAPI;


// const entriesAPI = {
//     getEntries: () => axios.get('/api/entries'),
//     createEntry: (entry: IEntry) => axios.post('/api/entries', entry),
//     updateEntry: (entry: IEntry) => axios.put(`/api/entries/${entry._id}`, entry),
//     deleteEntry: (id: string) => axios.delete(`/api/entries/${id}`)
// }