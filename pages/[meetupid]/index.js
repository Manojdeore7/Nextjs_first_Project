import DetailedPage from "../../components/meetups/DetailedPage";
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "1",
        },
      },
      {
        params: {
          meetupid: "2",
        },
      },
      {
        params: {
          meetupid: "3",
        },
      },
    ],
  };
}
function meetupid(props) {
  console.log("hi");
  return <DetailedPage meetup={props.meetup} />;
}
export async function getStaticProps(context) {
  //apply for async API
  console.log(context);
  let meetupID = context.params.meetupid;
  return {
    props: {
      meetup: {
        img: "https://images.unsplash.com/photo-1587325889132-2c9e393e7d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        title: "hi",
        address: "hi",
        id: meetupID,
      },
    },
  };
}
export default meetupid;
