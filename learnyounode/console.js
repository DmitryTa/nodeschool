var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js')

// 2

var sum = 0;
for(var i = 2; i<process.argv.length; i++ ) {
	sum += +process.argv[i]
}


// 3

function countLines(file) {
	var buffer = fs.readFileSync(file);
	return buffer.toString().split('\n').length - 1;
}

//console.log(countLinesAsync(process.argv[2]));


// 4

function countLinesAsync(file, callback) {
	fs.readFile(file, 'utf8', function(err, data) {
		if (err) return callback(err);
		callback(null, data.split('\n').length - 1 )
	});
}
/*
countLinesAsync(process.argv[2], function(err, data) {
	console.log(data);
	// обработка err
});
*/

// 5

function fileFilter(folder, type) {
	fs.readdir(folder, function(err, data) {
		if (err) throw err;
		data.forEach(function(file) {
			if(path.extname(file) == '.' + type) {
				console.log(file);
			}
		})
	})
}

//fileFilter(process.argv[2],process.argv[3])

// 6

mymodule(process.argv[2],process.argv[3], function(err, data) {
	console.log(data)
})