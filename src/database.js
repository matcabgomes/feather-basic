const mongoose = require('mongoose');

module.exports = function databaseConfig(app) {
  const { host, port, db } = app.get('database');
  mongoose.connect(`mongodb://${host}:${port}/${db}`, { useNewUrlParser: true })
    .then(() => console.log(`Mongo is running on mongodb://${host}:${port}/${db}`));
};
