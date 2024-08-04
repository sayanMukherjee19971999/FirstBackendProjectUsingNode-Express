//require('.dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from './db/dbconnect.js'

//configure the path of dotenv file
dotenv.config({
    path: './env'
})

//call the function for database connection
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('MONGODB connection failed !!!', err)
})





