
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
mongoose.connect('mongodb+srv://dev:TDUa31Zf4KXHnPfM@cluster0-katnu.mongodb.net/t6-test?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
