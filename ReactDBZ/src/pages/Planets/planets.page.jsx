import { useLocation, useNavigate } from "react-router-dom";
import "./planets.page.css";

export const Planets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const planets = location.state.item;

  const {isDestroyed, name, description, image} = planets;

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
    <div className="topbar">
        <button id="button" onClick={handleClick}>Home</button>
      </div>
      <div className="box">
        <div className="img-container">
          <img className="eachplanet-image" src={image}/>
          <div className="image-details">
            <h1>{name}</h1>
            <br />
            <p><strong>isDestroyed:</strong> {isDestroyed ? "YES" : "NO"}</p>
            <p><strong>Description:</strong> {description}</p>
          </div>
        </div>
      </div>
    </>
  );
};