const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Receipe-App/config/dbConfig');
const receipeRoutes = require('./Receipe-App/routes/receipeRoutes')

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/api/receipes', receipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});