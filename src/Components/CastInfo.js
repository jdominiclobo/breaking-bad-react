import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/CastInfo.css";

const CastInfo = ({ props }) => {
  const [characterInfo, setCharacterInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((response) => {
        const character = response.data[0];
        console.log(character);
        setCharacterInfo(character);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <h1>{characterInfo.name}'s info</h1>
      </div>

      {Object.keys(characterInfo).length > 0 && (
        <div className="charCard">
          <img
            className="characterImage"
            alt="characterImage"
            style={{ height: "100%", width: "20rem" }}
            src={characterInfo.img}
          />
          <div className="info">
            <span className="infoGain">
              Character name : {characterInfo.name} <br />
              Birthday : {characterInfo.birthday} <br />
              Occupation : {characterInfo.occupation[0]} <br />
              Status : {characterInfo.status} <br />
              Nickname : {characterInfo.nickname} <br />
              Portrayed by : {characterInfo.portrayed}
            </span>
          </div>
        </div>
      )}
      <div className="backButton">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};
export default CastInfo;
