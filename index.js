const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorhandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(errorHandler);
app.use(boomErrorHandler)
app.use(logErrors);



app.listen(port, () => {
  console.log('Mi port' +  port);
});
