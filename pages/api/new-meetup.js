// /api/new-meetup
// POST /api/new-meetup.js

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("Inpost method");
    const client = await MongoClient.connect(
      "mongodb://localhost:27017/react_tutorial"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
