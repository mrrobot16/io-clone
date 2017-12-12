var express = require("express")
var path = require('path')
var app = express()
var port = process.env.PORT || 3000
app.use(express.static('assets'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
app.listen(port, () => console.log('AuditChain ICO Running listening on port 3000!'))
