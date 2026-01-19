const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'text/plain'})
    resp.end("hello world");
}).listen(7600);