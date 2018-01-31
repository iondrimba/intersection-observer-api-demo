var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(`
  <!DOCTYPE html>
<html>
<head>
<title>Page Title Ion</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
  `)
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
