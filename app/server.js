const express = require('express');
const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const { sequelize } = require('./models');
require('dotenv').config();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// require('./routes')(app);

// sequelize.sync().then(() => {
//   console.log('Database synced');
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
// }).catch(err => {
//   console.error('Unable to sync database:', err);
// }); 