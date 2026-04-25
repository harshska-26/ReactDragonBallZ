import { useLocation, useNavigate } from "react-router-dom";
import "./characters.page.css"; 

export const Characters = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const character = location.state.charItems;
  
  const handleClick = () => {
    navigate("/home");
  };
  const { name, image, race, gender, affiliation, ki, maxKi, description } = character;

  return (
    <>
      <div className="topbar">
        <button id="button" onClick={handleClick}>Home</button>
      </div>
      <div className="box">
        <div className="img-container">
          <img className="image" src={image}/>
          <div className="image-details">
            <h1>{name}</h1>
            <h2 className="race-gender">
              {race} - {gender}
            </h2>
            <p><strong>Affiliation:</strong> {affiliation}</p>
            <p><strong>Ki:</strong> {ki}</p>
            <p><strong>Total Ki:</strong> {maxKi}</p>
            <p><strong>Description:</strong> {description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
