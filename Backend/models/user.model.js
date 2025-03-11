import mongoos from "mongoose";

const userSchema=mongoos.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
},{
    timestamp:true,//createdAt & updated
})

const User=mongoos.model("User",userSchema)

export default User