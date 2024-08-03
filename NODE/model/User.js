const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose=require('passport-local-mongoose');
var User=new Schema({

	username:{
		type: String
	},
	password:{
		type:String
	}
})
/*this user is schema obj*/User.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',User)//1st User here is collection name
                                          //2nd User is schema object