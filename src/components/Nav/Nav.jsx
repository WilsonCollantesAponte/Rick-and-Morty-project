import SearchBar from "../SearchBar/SearchBar.jsx";
import RandomButton from "../RandomButton/RandomButton.jsx";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import m from "./Nav.module.css";

export default function Nav(props) {
  const navigate = useNavigate();

  function handleLogOut() {
    props.logOut();
    navigate("/");
  }

  return (
    <div className={m.div}>
      <NavLink className={m.comp} to="/about">
        <button className={m.button}>About</button>
      </NavLink>

      <NavLink className={m.comp} to="/home">
        <button className={m.button}>Home</button>
      </NavLink>

      <NavLink to={"/favCards"}>
        <button>Favs</button>
      </NavLink>

      <button onClick={handleLogOut}>LogOut</button>

      <RandomButton onSearch={props.onSearch} />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

// onSearch={(characterID)=>
//     window.alert(characterID)}
