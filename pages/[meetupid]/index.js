import DetailedPage from "../../components/meetups/DetailedPage";
export async function getStaticPaths() {
  let res = await fetch(`/api/new-meetup`);
  let data = res.json();
  return {
    fallback: false,
    paths: data.map((e) => {
      return {
        params: {
          meetupid: e._id,
        },
      };
    }),
  };
}
function meetupid(props) {
  return <DetailedPage meetup={props.meetup} />;
}
export async function getStaticProps(context) {
  //apply for async API

  let meetupID = context.params.meetupid;
  let res = await fetch(`/api/new-meetup/${meetupID}`);
  let data = res.json();
  return {
    props: {
      meetup: data,
    },
  };
}
export default meetupid;
