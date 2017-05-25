var fs = require('fs');

console.log('Begin');
fs.readFile('./file.txt','utf8', function(error, data) {
    console.log(data);
});

console.log('End');