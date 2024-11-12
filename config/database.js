import mongoose from "mongoose";

let url = process.env.URI_MONGO;
console.log(url);

async function connectDataBase(){
try {
    await mongoose.connect(url);
    console.log("DataBase is connected");
    
} catch (error) {
    console.log(error);
    
}
}

connectDataBase();