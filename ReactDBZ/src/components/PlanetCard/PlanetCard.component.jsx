import { useEffect, useState } from "react";
import { DragonBallData } from "../../services/Dragonball.service";
import { PlanetDetails } from "../planetDetails/planetDetails.component";
import "./PlanetCard.component.css";

export const PlanetCard = () => {
  const [planetDet, setPlanetDet] = useState([]);

  useEffect(() => {
      const dataFunc = async () => {
        const Res = await DragonBallData();
        setPlanetDet(Res.planetItems);
      };
      dataFunc();
    }, []);

  return (
    <div className="image-container">
        <img
        src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
        id="bgimg"
      />
      <div id="planet-container">
        {planetDet &&
          planetDet.map((planet) => {
            return <PlanetDetails key={planet.id} item={planet} />;
          })}
          </div>
    </div>
  )
}