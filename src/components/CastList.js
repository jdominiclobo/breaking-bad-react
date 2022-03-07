import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CastList.css";
import { Link } from "react-router-dom";

const CastList = (props) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        const result = response.data;
        console.log(result);
        setCast(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className="container">
        {cast.map((character) => {
          return (
            <div className="characterCard" key={character.char_id}>
              <Link to={`/characters/${character.char_id}`}>
                <img
                  alt="characterImage"
                  style={{ height: "100%", width: "100px" }}
                  src={character.img}
                />
                <br />
                <span>{character.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CastList;
