const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('express-async-errors');

const dweetRouter = require('./router/dweets');

const app = express();

app.use(cors()); // CORS Apply
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.use('/dweets', dweetRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error has occured' });
});

app.listen(8080, () => {
  console.log('SERVER IS RUNNING ON PORT 8080');
});
