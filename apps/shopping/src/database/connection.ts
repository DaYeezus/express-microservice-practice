import {default as mongoose} from "mongoose";

export async function connectToMongoDB(mongoUrl:string) {
  try {
    await mongoose.connect(mongoUrl)
    mongoose.connection.once("connection" , () => {
      console.log("MongoDb Connected");
    })
    mongoose.connection.once("disconnect" , () => {
      console.log("MongoDb DisConnected");
    })
    mongoose.connection.once("error" , (error) => {
      console.log(`error accrued MongoDb DisConnected , ${error}`);
    })
  }catch (err){
    console.error(err);
  }
}