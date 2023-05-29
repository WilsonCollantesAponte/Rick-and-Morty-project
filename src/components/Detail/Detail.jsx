import m from "./Detail.module.css";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const id = Number(useParams().id.slice(1));

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //  const m=character.episode.split("https://rickandmortyapi.com/api/").join("")

  //   console.log(character)
  // const {name}=character.location
  return (
    <div className={m.div}>
      <h1>{character.name}</h1>
      <h1>{character.created}</h1>
      {/* <h1>{character.episode}</h1> */}
      <h1>{character.gender}</h1>
      <h1>Target ID: {character.id}</h1>
      <img src={character.image} />
      <h1>Location: {character.location?.name}</h1>
      <h1>Specie: {character.species}</h1>
      <h1>Status: {character.status}</h1>
      {/* <h1>Type: {character.type}</h1> */}
      <h1>Origin: {character.origin?.name}</h1> {/* hace falta '?'*/}
    </div>
  );
}
