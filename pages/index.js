import MeetupList from "../components/meetups/MeetupList";

let Array = [
  {
    id: 1,
    title: "this is first imafge",
    image:
      "https://images.unsplash.com/photo-1587325889132-2c9e393e7d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    address: "this is from dhuel",
  },
  {
    id: 2,
    title: "this is first imafge",
    image:
      "https://images.unsplash.com/photo-1587325889132-2c9e393e7d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    address: "this is from dhuel",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  //apply for async API
  return {
    props: {
      meetups: Array,
    },
  };
}
export default HomePage;
