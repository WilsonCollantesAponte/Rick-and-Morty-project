import "./App.css";
import axios from "axios";

import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import FavCards from "./components/Fav/FavCards/FavCards";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";

import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false),
    EMAIL = "wilson.aponte000@gmail.com",
    PASSWORD = "123456sS";

  function login(userData) {
    // EMAIL===userData.email&&
    // PASSWORD===userData.password&&
    // setAccess(true)&&
    // navigate("/home")

    if (EMAIL === userData.email && PASSWORD === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  }

  function onSearch(id) {
    for (let e of characters) {
      if (Number(id) === e.id) return alert("Ya incluido");
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((val) => val.id !== Number(id)));
  }

  function logOut() {
    setAccess(false);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {/* <Nav onSearch={onSearch}/> */}
      {/* <hr/> */}

      {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favCards" element={<FavCards />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

// "/detail/:id"
