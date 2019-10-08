var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/big-spendah',
{useNewUrlParser: true, useCreateIndex: true}
);