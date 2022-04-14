import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/CastList.css";
import { Link } from "react-router-dom";

type CharactersType = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  appearance: number[];
  nickname: string;
  portrayed: string;
};

const CastList = () => {
  const [cast, setCast] = useState<CharactersType[] | []>([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        const result = response.data;
        console.log("cast list", result);
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
              <Link to={`/cast/${character.char_id}`}>
                <img
                  alt="characterImage"
                  style={{
                    height: "80%",
                    width: "20rem",
                    border: "15px solid white",
                  }}
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
