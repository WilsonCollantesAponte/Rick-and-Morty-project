import { connect } from "react-redux";

import s from "./FavCards.module.css";

import FavCard from "../FavCard/FavCard.jsx";

function FavCards(props) {
  return (
    <div className={s.div}>
      {
        // props.favs.length >= 1 &&
        props.favs.map((val) => {
          return (
            <div key={val.id}>
              <FavCard
                key={val.id}
                id={val.id}
                name={val.name}
                status={val.status}
                species={val.species}
                gender={val.gender}
                origin={val.origin.name}
                image={val.image}
              />
            </div>
          );
        })
      }
      {/* <FavCard /> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favs: state.favs,
  };
}

export default connect(mapStateToProps, null)(FavCards);
