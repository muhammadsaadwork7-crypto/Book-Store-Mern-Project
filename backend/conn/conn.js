const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);   // Google DNS for better reliability

const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
};

conn();