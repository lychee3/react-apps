const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

// urlencodedとjsonを初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const themes = JSON.parse(fs.readFileSync('./themes.json', 'utf-8'));

app.get('/api/themes', (req, res) => {
  res.json(themes);
});

app.listen(port, () => console.log(`Sample app listening on port ${port}!`))