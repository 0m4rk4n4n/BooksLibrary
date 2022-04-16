require("dotenv").config()
const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true})
.then(()=>
{
    console.log("Connected to Database..")
}).catch(e=>{console.log(`Error: ${e}`)})
const PORT=process.env.PORT || 3000
const router=require("./routes/index")
const expressLayouts=require("express-ejs-layouts")
const path=require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.set("layout",path.join(__dirname,"layout","layout"))
app.use(express.static("public"))
app.use(expressLayouts)
app.use(router)
app.listen(PORT,()=>
{
    console.log(`Server is running on port ${PORT}`)
})