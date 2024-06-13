const mongoose= require("mongoose")
const schema= mongoose.Schema(
    {
        "name":{type:String,reuired:true},
        "email":{type:String,reuired:true},
        "phone":{type:String,reuired:true},
        "gender":{type:String,reuired:true},
        "password":{type:String,reuired:true}
    }
)
let userModel= mongoose.model("users",schema)
module.exports={userModel}