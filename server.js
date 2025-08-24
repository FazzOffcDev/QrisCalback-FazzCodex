require('dotenv').config();
const express = require('express');
const app = express();
const callbackRoute = require('./routes/callback');

app.use(express.json());
app.use('/qris/callback', callbackRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log('QRIS Callback Server running...');
});
