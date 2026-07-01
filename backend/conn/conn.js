const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);   // Google DNS for better reliability

const mongoose = require("mongoose");

const conn = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || `mongodb+srv://muhammadsaadwork7_db_user:rD5ylE9eUmYafdKU@cluster0.6wdc1gi.mongodb.net/Bookstore`;
        
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
            retryWrites: true,
            w: "majority"
        });
        console.log("Connected to Database");
    } catch (error) {
        console.log("Database Connection Error:", error.message);
        setTimeout(conn, 5000); 
    }
};
conn();