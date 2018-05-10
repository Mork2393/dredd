var app = require('express')();

console.log('Welcome')
console.log('Listening on port 3000')

app.get('/', function(req, res) {
  res.json({message: 'Hello World!'});
})

app.listen(3000);