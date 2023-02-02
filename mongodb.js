const mongo = require('mongodb');
const client =mongo.MongoClient
let database

async function dbconnect() {
//   const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
    //  const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
    const uri="mongodb+srv://karthik5111:KarthikMongo%405111@pgrs.woy581p.mongodb.net/pgrs?retryWrites=true&w=majority"
    const mclient = await client.connect(uri)
        database=mclient.db('pgrs')
    if(!database){
        console.log("Db not connect")
    }
    return database
    

}

module.exports={
    dbconnect
}

