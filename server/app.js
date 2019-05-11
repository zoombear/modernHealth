import express from 'express';
import bodyParser from 'body-parser';
import { loadDB } from './database';
import { initRoutes } from './routes';

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );

  // Pass to next layer of middleware
  next();
});
app.use(express.static('public'));

loadDB();
initRoutes(app);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
