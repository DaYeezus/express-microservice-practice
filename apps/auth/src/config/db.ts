import * as mongoose from "mongoose";

export  function connectToMongoose(mongoUrl:string){
    mongoose.connect(mongoUrl).then((db) => {
        console.log('Connected to db')
    }).catch(err => {
        console.log(err)
    })
}