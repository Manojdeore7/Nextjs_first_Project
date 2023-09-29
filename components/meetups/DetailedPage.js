import classes from "./DetailedPage.module.css";

export default function DetailedPage(props) {
  return (
    <section className={classes.detail}>
      <img src={props.meetup.img} />
      <h1>{props.meetup.title}</h1>
      <h3>{props.meetup.address}</h3>
      <h3>{props.meetup.id}</h3>
    </section>
  );
}
