import mongoose from "mongoose";

const DBConnection = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    })
}

export default DBConnection;