import {MongoClient} from "mongodb"


const uri = "Your Mongodb uri";


export async function dbConnect() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("developerLook")
  return {client, db}
}
