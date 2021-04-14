const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/mrgn',
  { useNewUrlParser: true },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to MongoDB on ${db.host}:${db.port}`));

// const mongoAtlasUri =
//   'mongodb+srv://Yoni:SuUJSC8a8ZcCJreE@cluster0.3vmni.mongodb.net/InitialDB?retryWrites=true&w=majority';

// mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to mongo database');
//   })
//   .catch((err) => {
//     console.log('Error connecting mongo database', err);
//   });
