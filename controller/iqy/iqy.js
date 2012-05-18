/* for screen */
var fs = require('fs');
exports.main = function(req, res){
    var file = './controller/data/iqy.json';
    var deffile = './controller/data/def.json';
    if (req.body['refresh'] == 'REFRESH') {
	var posts = JSON.parse(require('fs').readFileSync(deffile));
	res.render('scr/scr101', posts);
    } else if (req.body['update'] == 'UPDATE') {
	var posts = JSON.parse(require('fs').readFileSync(file));
	res.render('scr/scr101', posts);
    } else {
	var posts = JSON.parse(require('fs').readFileSync(deffile));
	res.render('scr/scr101', posts);
    }
};


/*
fs.readFile('/data/iqy.json'', "utf-8", function (err, data) {
	time = 0;
	data = data.split('\n').forEach(function (val, i) {
		time += +val
	    })
	    r = parseInt((time/60))+'\n'+(time%60)

	    fs.writeFile(file, r);
    });
*/