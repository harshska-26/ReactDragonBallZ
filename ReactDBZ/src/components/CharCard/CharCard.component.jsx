import { useEffect, useState } from "react";
import { DragonBallData } from "../../services/Dragonball.service";
import "./CharCard.Component.css";
import CharDetails from "../CharDetails/CharDetails.component";

export const CharCard = () => {
  const [characterDet, setCharacterDet] = useState([]);

  useEffect(() => {
      const dataFunc = async () => {
        const Res = await DragonBallData();
        console.log(Res.items);
        setCharacterDet(Res.items);
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
        {characterDet &&
          characterDet.map((char) => {
            return <CharDetails key={char.id} charItems={char} />;
          })}
      </div>
      
    </div>
  );
};
