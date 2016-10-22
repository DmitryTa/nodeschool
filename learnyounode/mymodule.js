 var fs = require('fs');
 var path = require('path');

 var mymudule = function (folder, type, callback) {
	fs.readdir(folder, function(err, data) {
		if (err) return callback(err);
		var fileArr = [];
		data.forEach(function(file) {
			if(path.extname(file) == '.' + type) {
				fileArr.push(file)
			}
		})
		callback(null, fileArr);
	})
}

module.exports = mymudule;