 var fs = require('fs');
 var path = require('path');

 var mymudule = function (folder, type, callback) {
	fs.readdir(folder, function(err, data) {
		if (err) return callback(err);
		data.forEach(function(file) {
			if(path.extname(file) == '.' + type) {
				callback(null, file);
			}
		})
	})
}

module.exports = mymudule;