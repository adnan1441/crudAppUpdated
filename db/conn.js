import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/schooldb").then(() => {
    console.log("connection success")
}).catch((err) => {
    console.log(err)
})