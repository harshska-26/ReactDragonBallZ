import { useNavigate } from "react-router-dom";
import "./planetDetails.component.css";

export const PlanetDetails = ({item}) => {
    const navigate = useNavigate();
    const { name, isDestroyed, description, image } = item;

  const handleClick = () => {
    navigate("/eachplanet", { state: { item } });
  }
  
  return (
    <>
    <div className="planet-card" onClick={handleClick}>
        <img src={image} className="planet-image" />
        <div className="planet-details">
          <h3 className="char-name">{name}</h3>
          <br />
          <p><strong>Description : </strong>{description} </p>
          <p> <strong>isDestroyed : </strong>{isDestroyed ? "YES" : "NO"} </p>
        </div>
      </div>
    </>
    )
}