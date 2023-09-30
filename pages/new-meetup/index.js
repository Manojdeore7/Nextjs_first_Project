import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
  async function fun(meetupData) {
    let { title, image, address, description } = meetupData;
    let res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify({
        title,
        image,
        address,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = res.json();
  }
  return <NewMeetupForm onAddMeetup={fun} />;
}
