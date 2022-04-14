import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/CastInfo.css";

type CastInfoType =
  | {
      char_id: number;
      name: string;
      birthday: string;
      occupation: string[];
      img: string;
      status: string;
      appearance: number[];
      nickname: string;
      portrayed: string;
    }
  | undefined;

const CastInfo = () => {
  const [characterInfo, setCharacterInfo] = useState<CastInfoType>();

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
    <div>
      <div>{characterInfo?.name && <h1>{characterInfo?.name}'s info</h1>}</div>

      <div className="charCard">
        <img
          className="characterImage"
          alt="characterImage"
          style={{
            height: "80%",
            width: "20rem",
            border: "15px solid white",
          }}
          src={characterInfo?.img}
        />
        <div className="info">
          <span className="infoGain">
            <p>Character name : {characterInfo?.name}</p>
            <p>Birthday : {characterInfo?.birthday}</p>
            <p>Occupation : {characterInfo?.occupation[0]}</p>
            <p>Status : {characterInfo?.status}</p>
            <p>Nickname : {characterInfo?.nickname}</p>
            <p>Portrayed by : {characterInfo?.portrayed}</p>
          </span>
        </div>
      </div>

      <button className="backButton" onClick={() => navigate("/cast")}>
        BACK
      </button>
    </div>
  );
};
export default CastInfo;
