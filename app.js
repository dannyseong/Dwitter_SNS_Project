const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('express-async-errors');

const dweetRouter = require('./router/dweets');
const authRouter = require('./router/auth');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors()); // CORS Apply
app.use(morgan('tiny'));
app.use(helmet());

app.use('/dweets', dweetRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error has occured' });
});

app.listen(config.host.port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${config.host.port}`);
});
