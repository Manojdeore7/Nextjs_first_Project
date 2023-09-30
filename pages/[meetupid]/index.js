import DetailedPage from "../../components/meetups/DetailedPage";
import { MongoClient, ObjectId } from "mongodb";
export async function getStaticPaths() {
  let client = await MongoClient.connect(
    "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/?retryWrites=true&w=majority"
  );
  let db = client.db("Meetups");
  let meetupCollections = db.collection("Meetups");
  let data = await meetupCollections.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: data.map((e) => {
      return {
        params: { meetupid: e._id.toString() },
      };
    }),
  };
}
function meetupid(props) {
  return <DetailedPage meetup={props.meetup} />;
}
export async function getStaticProps(context) {
  //apply for async API
  let client = await MongoClient.connect(
    "mongodb+srv://manojddeore11:F11bGkjXmqjGopiF@cluster0.ghvelkt.mongodb.net/?retryWrites=true&w=majority"
  );
  let db = client.db("Meetups");
  let meetupCollections = db.collection("Meetups");
  let meetupID = context.params.meetupid;
  let meetup = await meetupCollections.findOne({ _id: ObjectId(meetupID) });
  client.close();
  return {
    props: {
      meetup: {
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      },
    },
  };
}
export default meetupid;
