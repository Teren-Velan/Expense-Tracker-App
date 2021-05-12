const express = require('express');
const env = require('dotenv');
const app = express();

const bodyParser = require('body-parser')


//environment variable/contants
env.config()


// middlewares
app.use(express.json())


app.get("/" , (req,res) => {
    res.send('hello world')
})




app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  })
