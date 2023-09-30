import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;

    let client = await MongoClient.connect(
      "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/?retryWrites=true&w=majority"
    );
    let db = client.db("Meetups");
    let meetupCollections = db.collection("Meetups");
    // in result return the unique id of that data.
    let result = await meetupCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: "meetup added succesfully!!!" });
  } else if (req.method === undefined) {
    let client = await MongoClient.connect(
      "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/?retryWrites=true&w=majority"
    );
    let db = client.db("Meetups");
    let meetupCollections = db.collection("Meetups");
    // in result return data.
    let result = await meetupCollections.find();
    client.close();
    res.status(200).json(result);
  }
}
export default handler;
