import * as express from "express";
import * as cors from 'cors';

const app = express();
const server = require('http').createServer(app);

app.use(cors({ origin: '*' }));
server.listen(process.env.PORT || 4000);

app.get('/', (req:any, res:any) => {
  res.send('<h1>hello world</h1>');
});

console.log('test');
export default server;