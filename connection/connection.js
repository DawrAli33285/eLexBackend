const mongoose=require('mongoose')

let connection=mongoose.connect('mongodb+srv://elex:elex@cluster0.e8whvgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

module.exports=connection