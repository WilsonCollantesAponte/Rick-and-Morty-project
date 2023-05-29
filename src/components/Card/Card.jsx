import m from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addFav, deleteFav } from "../../redux/actions/action";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (props.favs.includes(props.id)) {
      setIsFav(true);
    }
  }, [isFav]);

  function handleFav() {
    if (isFav) {
      setIsFav(false);
      props.deleteFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  }

  //   let isFav = true;

  //   function handleFav() {
  //     if (isFav) {
  //       isFav = false;
  //       props.deleteFav(props.id);
  //     } else {
  //       isFav = true;
  //       props.addFav(props);
  //     }
  //   }

  const { id } = props;
  function onClose() {
    props.onClose(id);
  }
  return (
    <div className={m.div}>
      <button onClick={onClose} className={m.button}>
        X
      </button>
      {isFav ? (
        <button className={m.heartRed} onClick={handleFav}>
          ❤️
        </button>
      ) : (
        <button className={m.heartWhite} onClick={handleFav}>
          🤍
        </button>
      )}

      <NavLink to={`/detail/:${id}`}>
        <h2>{props.name}</h2>
      </NavLink>
      {/* <h2>{props.name}</h2> */}
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" className={m.image} />
    </div>
  );
}

const mapDispatchToProps = {
  addFav,
  deleteFav,
};

function mapStateToProps(state) {
  return {
    favs: [...state.favs].map((val) => val.id),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
