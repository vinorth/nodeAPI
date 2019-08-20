
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);

const port = process.env.PORT || 8080;
mongoose.connect('mongodb://dbuser:developer1@ds044989.mlab.com:44989/t6-test', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
