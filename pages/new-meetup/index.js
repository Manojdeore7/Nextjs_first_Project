import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
  function fun(arr) {
    console.log(arr);
  }
  return <NewMeetupForm onAddMeetup={fun} />;
}
