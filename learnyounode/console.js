var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js');
var http = require('http');
var bl = require('bl');
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


/*
mymodule(process.argv[2],process.argv[3], function(err, data) {
	data.forEach(function(file) {
		console.log(file)
	});
})

*/



// 7 




function getHttp(URL, callback) {
	
	var request = http.get(URL, function(resp){
		
		resp.setEncoding('utf8');

		resp.on('data', function(data) {
			callback(null, data);
		});

		resp.on('error', function(err) {
			callback(err);
		})

	}).on('error', console.error);
	
}
/*
 getHttp(process.argv[2], function(err, data) {
 	console.log(data);
 })
*/

// 8
/*
function getHttpData(URL, callback) {
	
	var request = http.get(URL, function(responce){
		
		responce.setEncoding('utf8');

		var dataString = '';

		responce.on('data', function(data) {
			dataString += data;
		});
		responce.on('end', function() {
			callback(null, dataString);
		})
		responce.on('error', function(err) {
			callback(err);
		})

	}).on('error', console.error);
	
}

getHttpData(process.argv[2], function(err, data) {
 	console.log(data.length);
 	console.log(data);
});
*/


// 9 
/*

function getHttpData(URL) {
	
	http.get(URL[2], function(responce){
		
		responce.setEncoding('utf8');

		var dataString = '';

		responce.on('data', function(data) {
			dataString += data;
		});
		responce.on('end', function() {
			console.log(dataString);

				//-----------------------------------------
				http.get(URL[3], function(responce){
		
					responce.setEncoding('utf8');

					var dataString = '';

					responce.on('data', function(data) {
						dataString += data;
					});
					responce.on('end', function() {
						console.log(dataString);

						//--------------------------------------------
						http.get(URL[4], function(responce){
		
							responce.setEncoding('utf8');

							var dataString = '';

							responce.on('data', function(data) {
								dataString += data;
							});
							responce.on('end', function() {
								console.log(dataString);
								

							})
							responce.on('error', function(err) {
								console.log(err);
							})

						}).on('error', console.error);
						
						

					})
					responce.on('error', function(err) {
						console.log(err);
					})

				}).on('error', console.error);
			
			
			

		})
		responce.on('error', function(err) {
			console.log(err);
		})

	}).on('error', console.error);
}


//getHttpData(process.argv)

var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  

*/

// 10


var net = require('net')  

function TCPserver(port) {
	var server = net.createServer(function (socket) {
	var date = new Date();
	var dateString = date.getFullYear()+'-'+(date.getMonth() +1)+'-'+date.getDate() +' ' +date.getHours()+':'+date.getMinutes() +'\n'; 
	       socket.end(dateString);
	})  
	server.listen(port);  

}
     

//TCPserver(process.argv[2]);

// 11


function HttpFileServer(port, file) {
	http.createServer(function(request, responce) {

	})
	server.listen(port)
}















