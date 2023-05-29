import Card from "../Card/Card.jsx";
import m from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={m.div}>
      {props.characters.map((val) => {
        return (
          <Card
            id={val.id}
            key={val.id}
            name={val.name}
            status={val.status}
            species={val.species}
            gender={val.gender}
            origin={val.origin.name}
            image={val.image}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
}
