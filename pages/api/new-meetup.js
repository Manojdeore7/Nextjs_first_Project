import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;
    let client = await MongoClient.connect(
      "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/Meetups?retryWrites=true&w=majority"
    );
    let db = client.db();
    let meetupCollections = db.collection("meetups");
    // in result return the unique id of that data.
    let result = await meetupCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: "meetup added succesfully!!!" });
  }
}
