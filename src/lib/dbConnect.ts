import {MongoClient} from "mongodb"


const uri = "mongodb+srv://sajjadho731_db_user:ZjlIkrfbTcusMd1Q@cluster0.nnjcbf8.mongodb.net/?appName=Cluster0";


export async function dbConnect() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("developerLook")
  return {client, db}
}