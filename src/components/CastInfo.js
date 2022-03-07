import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      <h1> Info </h1>
      {Object.keys(characterInfo).length > 0 && (
        <div className="infoPage">
          <img
            alt="characterImage"
            style={{ height: "100%", width: "100px" }}
            src={characterInfo.img}
          />
          <span> Character name : {characterInfo.name}</span> <br />
          <span> Birthday : {characterInfo.birthday}</span> <br />
          <span> Occupation : {characterInfo.occupation[0]}</span> <br />
          <span> Status : {characterInfo.status}</span> <br />
          <span> Nickname : {characterInfo.nickname}</span> <br />
          <span> Portrayed by : {characterInfo.portrayed}</span> <br />
        </div>
      )}
      <button className="backButton" onClick={() => navigate("/")}></button>
    </div>
  );
};
export default CastInfo;
