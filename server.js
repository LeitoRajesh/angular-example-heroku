const express = require('express');
const path = require('path');

const app = express()

app.use(express.static('./dist/quick-start-angular'))

app.get('/*', (req, resp) =>
    resp.sendFile("index.html", {root: 'dist/quick-start-angular'})
);

app.listen(process.env.PORT || 8080)