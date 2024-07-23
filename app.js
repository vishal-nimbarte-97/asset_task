const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const assetRoutes = require('./routes/assetRoutes');
const sequelize = require('./config/database');

app.use(bodyParser.json());

app.use('/api/assets', assetRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));
