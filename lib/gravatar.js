var crypto = require('crypto'), 
		querystring = require('querystring');


module.exports = function(email) {

	var https = false;
	var options = {};
	var self = this;

	email = email || "";

	this.secure =  function() {
		https = true;
		return self;
	};

	this.size = function(pixels) {
		options.size = pixels;
		return self;
	};

	this.rating = function(code) {
		options.rating = code;
		return self;
	};

	this.default = function(imageUrl) {
		options.default = imageUrl;
		return self;
	};

	this.avatar = function() {
		var baseURL = (https && "https://secure.gravatar.com/avatar/") || 'http://www.gravatar.com/avatar/';
		var queryData = querystring.stringify(options);
		var query = (queryData && "?" + queryData) || "";

		return baseURL + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex') + query;
	};

	this.profile = function() {
		var baseURL = (https && "https://secure.gravatar.com/") || 'http://www.gravatar.com/';
					
		return baseURL + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex');
	};
	
	return this;
};