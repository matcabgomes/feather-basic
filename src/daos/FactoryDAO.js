const MessageDAO = require('./MessageDAO');

class FactoryDAO {
  getDAO(dao) {
    this.dao = dao;

    switch (this.dao) {
      case 'message':
        return new MessageDAO();
      default:
        return null;
    }
  }
}

module.exports = FactoryDAO;
