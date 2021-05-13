const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose')

// routes
const incomeRoutes = require('./routes/income.routes')
const expenseRoutes = require('./routes/expense.routes')
const authRoutes = require('./routes/auth.routes')

//environment variable/contants
env.config()

//mongo connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.bpbd6.mongodb.net/${process.env.MONGO_DB_database}?retryWrites=true&w=majority`, {
      useCreateIndex:true,
      useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('DB Connected Successfully')
      });



// middlewares
app.use(express.json())
app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/income' , incomeRoutes)
app.use('/api/v1/expense' , expenseRoutes)




app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  })
