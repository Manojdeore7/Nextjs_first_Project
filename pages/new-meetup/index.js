import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
  async function fun(meetupData) {
    let res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = res.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={fun} />;
}
