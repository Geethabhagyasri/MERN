var express=require('express');
var app=express();
app.get('/lucky',function(req,res){
	res.send("welcome to expressjs world");
});
app.listen(4000);
