const jwt=require('jsonwebtoken')

module.exports.auth=async(req,res,next)=>{
   
    try{
if(req?.headers?.authorization?.startsWith('Bearer')){
   
    let token=req?.headers?.authorization?.split(' ')[1]
    console.log("TOKEN")
    console.log(token)
    let user=jwt.verify(token,"SDAFJFSJFGSJFJSFISDIFSIFIS*$#*@$*@#$@#FDSFSFOSDFOSOFOFOAOFOADPASPCKB")
    console.log("USER FOUND")
    console.log(user)
    console.log("PROFILE")
    console.log(req.profile)
    req.user=user.user
    req.profile=user.profile
    next()
}else{
    return res.status(400).json({
        error:"Invalid token"
    })
}
    }catch(e){
   console.log("AUTH ERROR")
   console.log(e.message)
return res.status(400).json({
    error:"Something went wrong please try again"
})
    }
}