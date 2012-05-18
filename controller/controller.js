var url = require("url");
var iqy = require("./iqy/iqy");


/* for screen */

/* function Definition */
var handle = {};
handle['/scr/101'] = iqy.main;


exports.scrget = function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('get action ' + req.params.id);
    if (typeof handle[pathname] === 'function') {
	handle[pathname](req, res);
    } else {
	res.redirect('/');
    }

};


exports.scrpost = function(req, res) {
    var pathname = url.parse(req.url).pathname;

    /* dispatch */
    if (typeof handle[pathname] === 'function') {
	handle[pathname](req, res);
    } else {
	res.redirect('/');
    }

};
