const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/build/index.html'); // For React/Redux
});
app.listen(PORT, error => {
  error
    ?
    console.error(error) :
    console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
