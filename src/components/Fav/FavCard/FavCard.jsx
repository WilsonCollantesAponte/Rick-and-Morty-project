import s from "./FavCard.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import { addFav, deleteFav } from "../../../redux/actions/action";

function FavCard(props) {
  const { id } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (props.favs?.includes(props.id)) {
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

  return (
    <div className={s.div}>
      {isFav ? (
        <button className={s.heartRed} onClick={handleFav}>
          ❤️
        </button>
      ) : (
        <button className={s.heartWhite} onClick={handleFav}>
          🤍
        </button>
      )}

      <NavLink to={`/detail/:${id}`}>
        <h2>{props.name}</h2>
      </NavLink>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" className={s.image} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FavCard);
