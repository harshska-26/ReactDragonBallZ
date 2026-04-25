import { useEffect, useState } from "react";
import { DragonBallData } from "../../services/Dragonball.Service";
import "./CharCard.Component.css";
import CharDetails from "../CharDetails.Component/CharDetails.Component";

export const CharCard = () => {
  const [characterDet, setCharacterDet] = useState([]);

  useEffect(() => {
    const dataFunc = async () => {
      const data = await DragonBallData();
      setCharacterDet(data);
    };
    dataFunc();
  }, []);

  return (
    <div id="image-container">
      <img
        src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
        id="bgimg"
      />
      <div id="char-container">
        {characterDet.map((char) => {
          return <CharDetails key={char.id} items={char} />;
        })}
      </div>
    </div>
  );
};
