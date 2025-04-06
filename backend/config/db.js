import mongoose from "mongoose";

const db = async () => {
    try {
        mongoose.connect(process.env.db_KEY);
        console.log("mongoose connected")
    } catch (error) {
        console.log({ error: error.message })
    }
}

export {db}