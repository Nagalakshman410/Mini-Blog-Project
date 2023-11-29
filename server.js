const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server =http.createServer((req, res) => {
    //console.log(req.url, req.method);

    // Lodash (i.e, _)
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {  //Here greet func will only give output 1 time bcz of _.once
        console.log("Hello!");
    });

    greet();
    greet();
    // No matter how many times we call a func that is declared as once it will return its value only 1 time


    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){

        case '/':
            path += "/index.html";
            res.statusCode = 200;
            break;

        case '/about':
            path +="/about.html";
            res.statusCode = 200;
            break;

        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
// This about-me case is about re-directing to about page.

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log("Listening for the requests on port 3000");
});