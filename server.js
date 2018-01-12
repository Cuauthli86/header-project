var express = require('express');
var app = express();
var PORT= process.env.PORT || 5000;

var header={
ipadress:null,
languaje:null,
software:null
};
app.get('/', function(req,res){
var ip=req.socket.localAddress || req.connection.remoteAddress || req.headers['x-forwarded-for'];
var idiom=req.headers['accept-language'];
header.ipadress=ip;
header.languaje=idiom.slice(0,5);
header.software=opS(req.headers['user-agent']);

res.send(JSON.stringify(header));
});

function opS(s){
var o= s.split("(");
var si=o[1].split(")");
return si[0];
}
app.listen(PORT, function (){
    console.log('Node is listen on port:' +PORT);
});