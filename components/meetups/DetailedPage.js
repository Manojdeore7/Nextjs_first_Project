import classes from "./DetailedPage.module.css";

export default function DetailedPage(props) {
  return (
    <section className={classes.detail}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h3>{props.address}</h3>
    </section>
  );
}
