const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./router/egRouter')  
dotenv.config()

const PORT = process.env.PORT || 3000
connectDB();
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})