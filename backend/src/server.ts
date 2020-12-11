import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Test'});
});

app.listen(3333, () => {
  console.log(`Server is running on port 3333`)
});