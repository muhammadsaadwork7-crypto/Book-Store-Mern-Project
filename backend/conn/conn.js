const dns = require("dns");
dns.setServers(["1.1.1.1"]);   // Cloudflare DNS

const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(`mongodb+srv://muhammadsaadwork7_db_user:rD5ylE9eUmYafdKU@cluster0.6wdc1gi.mongodb.net/Bookstore`);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
};
conn();