import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://janwar2024:janwar54321@janwardb.dqfkidw.mongodb.net/?retryWrites=true&w=majority&appName=JanwarDB" || "";


// const uri = process.env.AUTOSIM_DB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("JanwarDB").command({ ping: 1 });
  console.log(
   "Pinged deployment. Successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("JanwarDB");

export default db;


