const model = require('../models/message')();

class MessageDAO {
  async save(message) {
    console.log('Saving the message 2');
    this.message = await model.create(message);
    console.log(`The message was saved ${JSON.stringify(this.message)}`);
    return this.message;
  }
}

module.exports = MessageDAO;
