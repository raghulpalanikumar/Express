const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')//8
const connectDB = require('./config/db')
const router = require('./router/egRouter');  
const todoRouter = require('./router/todoRouters');//8
const PORT = process.env.PORT || 3000
//frontend connection

connectDB(); 
app.use(express.json())
app.use(router)
app.use(cors())//8
app.use('/todo',todoRouter)//8

app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})
