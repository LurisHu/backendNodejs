const http = require('http');
const route = require('./route');

console.log(route.name);
console.log(route.add(5,7));
console.log(route.data);
const server = http.createServer(route.handler);
const {CustomerType,Customer}=require('./models/db');
server.listen(8081,()=>{
    console.log('Server running on port: 8081');
});