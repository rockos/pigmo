var data = [
	    { scrhead: 'This screen is for form test.',comment:
	      'node.js+express'}
	    , {area: 'NORTH side', stat: 'some foo bar' }
	    , {area: 'WEST side', stat: 'more foo bar'} 
	    , {area: 'SOUTH side', stat: 'more foo bar baz'} 
	    /*
	    { company: 'hogehoge', body0: 's'}
	  ,  { title1: 'Foo', body1: 'some foo bar' }
	  , { title2: 'Foo bar', body2: 'more foo bar' }
	  , { title3: 'Foo bar baz', body3: 'more foo bar baz' }
	    */
	  ];

exports.scrget = function(req, res){
    res.render('scr/scr101', { title: 'pigmo' ,posts: data})
};

exports.scrpost = function(req, res) {
    res.render('scr/scr101', { title: 'Done' ,posts: data})
};
/*
exports.scrpost = function(req, res) {
    res.render('index', { title: 'Done' ,company: "locos"})
};
*/