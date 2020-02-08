require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const handler = require('./handlers');

require('./models');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/', routes.home);
app.use('/api/v1/users', routes.user);

//Handlers
app.use(handler.notFound);
app.use(handler.errors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
	console.log(`Server runnng on ${PORT}`);
});
