//require('.dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from './db/dbconnect.js'

//configure the path of dotenv file
dotenv.config({
    path: './env'
})

//call the function for database connection
connectDB()





/*
import express from 'express';

const app=express();
( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Error :"+error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: " + error)
        throw error
    }
})()
*/