import { useNavigate } from "react-router-dom";

export const FirstCards = () => {
  const navigate = useNavigate();

  const handleCharClick = () => {
    navigate("/characters");
  };

  const handlePlanetClick = () => {
    navigate("/planets");
  };

  return (
    <div className="entireBox">
      <div className="chooseBox">
        <div className="charBox" onClick={handleCharClick}>
          <img
            className="charImg"
            src="https://dragonball-api.com/characters/goku_normal.webp"
            alt="goku"
          />
          <h2>Characters</h2>
        </div>
        <div className="planetBox" onClick={handlePlanetClick}>
          <img
            className="planetImg"
            src="https://dragonball-api.com/planetas/Namek_U7.webp"
            alt="earth"
          />
          <h2>Planets</h2>
        </div>
      </div>
    </div>
  );
};