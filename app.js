var express = require('express')
var app = express()

var data = require('./data');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('static'))

app.get('/', function(req, res) {
	res.render("legends", {'legends': data.legends.list, 'data': data.legends.legend});
})

app.get('/l/:l', function(req, res) {
	var l = req.params.l;
	res.render("legend.html", {'legend': l, 'data': data.legends.legend[l], 'weapons': data.weapons});
})

app.get('/w', function(req, res) {
	res.render("weapons", {'list': data.weapons_list, 'weapons': data.weapons})
})

app.get('/w/:w', function(req, res) {
	var w = req.params.w;
	var dat = {'weapon': w};
	res.render("weapon", dat);
})

app.get('/c/:w', function(req, res) {
	var w = req.params.w;
	var dat = {'weapon': w, 'combos': data.weapons[w].combos};
	res.render("combow", dat);
})

app.get('/c/e/:l', function(req, res) {
	var l = req.params.l;
	var dat = {'legend': l, 'weapons': data.exclusive_combos[l]};
	res.render("comboe", dat)
})

app.get('/s', function(req, res) {
	res.render("stats");
})

app.listen(8000, function () {
  console.log('brawl-db is up and running!')
})