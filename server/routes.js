const app = require('./index');
const { sortHandler } = require ('./handlers');


app.post('/api/sort', sortHandler);
