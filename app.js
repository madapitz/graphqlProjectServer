const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://usuario123:mamalo666@cluster0-1czay.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
	console.log('connected to the database');
});

app.use("/graphql", graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('listening on port 4000');
});