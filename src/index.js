const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () => console.log(`Feathers REST API started at http://localhost:${port}`));