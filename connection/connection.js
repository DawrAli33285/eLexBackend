const mongoose=require('mongoose')

// const connect=mongoose.connect(`mongodb+srv://dawar:dawar@cluster0.7b9t5dx.mongodb.net/`)
const connect=mongoose.connect(`mongodb+srv://username:newpassword@cluster0.e8whvgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)


module.exports=connect;