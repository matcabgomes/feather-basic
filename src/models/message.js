const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema;

let model = null;

module.exports = () => {
  const schema = mongooseSchema({
    text: {
      type: String,
      required: true,
    },
  });

  model = model || mongoose.model('message', schema);

  return model;
};
