const fs = require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if (url === '/') {
        fs.readFile('message.txt', { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(data);
            res.write('<html>');
            res.write('<head><title>enter message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="button1"><button type="submit">send</button></form></body>');
            res.write('</html>');
            return res.end();
    
        });
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunck) => {
            console.log(chunck);
            body.push(chunck);
    
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    consolelog(err)
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
    
            });
    
        });
    } 
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>my first nodejs page</title></head>');
        res.write('<body><h1>Hello from nodejs</h1></body> ');
        res.write('</html>');
        res.end();
    }


};
//module.exports=requestHandler;
//module.exports={
  //  handler:requestHandler,
  //  somtext:"bindu"
//}
module.exports.handler=requestHandler;
module.exports.somText="bondu";
