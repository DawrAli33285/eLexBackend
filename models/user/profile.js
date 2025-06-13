const mongoose=require('mongoose')
const profileSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    avatar:{
type:String,
default:'https://cdn.pixabay.com/photo/2014/03/25/15/23/user-296688_1280.png'
    },
    name:{
        type:String,
     
    },
    phone:{
        type:String,
       
    },
    company:{
        type:String,
   
    },
    job_title:{
        type:String,
      
    },
    is_email_verified:{
        type:Boolean,
        default:false
    },
    public_profile:{
        type:String
    },
    tagline:{
        type:String
    },
    language:{
        type:String,
        default:'English'
    },
    signature:{
        type:String
    },
    initial:{
        type:String
    },
    verifyPhone:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const profileModel=mongoose.model('profile',profileSchema)

module.exports=profileModel;