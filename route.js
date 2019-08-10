const url = require('url');
const fs= require('fs');
const handler = (req,res)=>{
    if(req.url =='/home'){
        fs.readFile('html/home.html',(err, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});4
            res.write(data);
            res.end();
        });
    }
if(req.url =='/detail'){
    res.setHeader('Conent-Type','text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Hello nodejs</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h2 style="color:red">Method: '+req.method+'</h2>');
    res.write('<h2 style="color:red">Url: '+req.url+'</h2>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}
//can use library "nodejs url module"
//https://www.w3schools.com/nodejs/nodejs_url.asp
else{
    const url = req.url;
    if(req.url.startsWith('/sayHello')){
        const params = url.split('?');
        if(params.length===2){
            const paramsName=params[1].split('&');
            let urlParams = [];
            paramsName.forEach(el =>{
                const values = el.split('=');
                urlParams.push({name: values[0],value:values[1]});
            });
            
            const nameParams = urlParams.find((x)=>
                x.name==='name'
            );
            const ageParams = urlParams.find((x)=>
                x.name==='age'
            );
            if(nameParams){
                res.setHeader('Conent-Type','text/html');
                res.write('<html>');
                res.write('<head>');
                res.write('<title>Hello nodejs</title>');
                res.write('</head>');
                res.write('<body>');
                res.write('<h2 style="color:red">Method: '+nameParams.value+'</h2>');
                res.write('<h2 style="color:red">Url: '+ageParams.value+'</h2>');
                res.write('</body>');
                res.write('</html>');
                res.end();
            }
        }
    }
}
}
const sum = (a,b)=>a+b;
const arr = [3,5,7,8,41,5,6,15,2];

module.exports = {
    handler: handler,
    name: 'Routing',
    add:sum,
    data:arr
};