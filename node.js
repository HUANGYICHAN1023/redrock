var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var MimeType={
    '.html':'text/html',
    '.css':'text/css',
    '.png':'image/png',
    '.js':'application/x-javascript'
}
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/')pathname='/index.html';
    if(pathname.indexOf('.') === -1 )pathname += '/index.html';
    fs.readFile('./public'+pathname,function(err,data){
        if(err){
            res.end('404');
            return;
        }
        res.writeHead(200,{'content-type':MimeType[path.extname(pathname)]});
        res.end(data);
    })
})
server.listen(3000);
console.log('running');
