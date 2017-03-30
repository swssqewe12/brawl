var express = require('express')
var app = express()
var unirest = require("unirest");

app.get('/api', function(req, res) {
	unirest.get("https://brawlhalla.p.mashape.com/apiplayer.php?type=1v1&p=Th%C3%A8or")
	.header("X-Mashape-Key", "EV40SVABxsmshiK5MkrZO1L5TxPQp1btfKtjsnBylH3tyMpvit")
	.header("Accept", "text/plain")
	.end(function (result) {
		res.send(result.body)
	});
})

app.listen(8000, function () {
  console.log('up!')
})