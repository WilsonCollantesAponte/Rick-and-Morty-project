import m from "./About.module.css";

export default function About() {
  const h = "<->";
  return (
    <div className={m.div}>
      <h1>My name is Wilson Collantes</h1>
      <h1>{h}</h1>
    </div>
  );
}
