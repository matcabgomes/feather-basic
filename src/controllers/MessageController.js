const FactoryDAO = require('../daos/FactoryDAO');

class Messages {
  constructor() {
    console.log('Constructor OK');
    this.messages = [];
    this.currentId = 0;
    this.FactoryDAO = new FactoryDAO();
    this.dao = this.FactoryDAO.getDAO('message');
  }

  async find() {
    // Return the list of all messages
    return this.messages;
  }

  async get(id) {
    // Find the message by id
    const message = this.messages.find(msg => msg.id === parseInt(id, 10));

    // Throw an error if it wasn't found
    if (!message) {
      throw new Error(`Message with id ${id} not found`);
    }

    // Otherwise return the message
    return message;
  }

  async create(data) {
    console.log('Function Create');
    // Create a new object with the original data and an id
    // taken from the incrementing `currentId` counter
    const message = Object.assign({
      id: this.currentId += 1,
    }, data);
    console.log('Saving the message 1');
    await this.dao.save(message);
    // this.messages.push(message);

    return message;
  }

  async patch(id, data) {
    // Get the existing message. Will throw an error if not found
    const message = await this.get(id);

    // Merge the existing message with the new data
    // and return the result
    return Object.assign(message, data);
  }

  async remove(id) {
    // Get the message by id (will throw an error if not found)
    const message = await this.get(id);
    // Find the index of the message in our message array
    const index = this.messages.indexOf(message);

    // Remove the found message from our array
    this.messages.splice(index, 1);

    // Return the removed message
    return message;
  }
}

module.exports = Messages;
