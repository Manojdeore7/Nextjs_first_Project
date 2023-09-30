import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  //apply for async API
  let client = await MongoClient.connect(
    "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/?retryWrites=true&w=majority"
  );
  let db = client.db("Meetups");
  let meetupCollections = db.collection("Meetups");
  let data = await meetupCollections.find().toArray();
  client.close();
  return {
    props: {
      meetups: data.map((e) => ({
        title: e.title,
        address: e.address,
        description: e.description,
        image: e.image,
        id: e._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
