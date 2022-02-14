const http = require('http');

const port = 8080

const routeMap = {
    '/user' : 'User Screen',
    '/admin' : 'Admin Screen',
    '/about' : 'This is About Page',
    '/' : 'this is Home screen'
}

http.createServer(function (req, res) {

console.log(req.headers);

    res.writeHead(200, {
        "Content-Type" : "text/html"
    });

    if(routeMap[req.url]){
        res.write(routeMap[req.url])
    }
    else{
        res.write("Page Not Found");
    }
    res.end(); 

}).listen(port,()=>{
    console.log("Server is UP and running on port: ",port);
}); 






