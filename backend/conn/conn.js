const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/bookstore`);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
};
conn();