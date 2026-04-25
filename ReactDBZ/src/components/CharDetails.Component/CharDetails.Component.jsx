import "./CharDetails.Component.css";
const CharDetails = ({ items }) => {
  const { name, image, race, gender, affiliation, ki, maxKi } = items;
  return (
    <div className="char-card">
      <img src={image} alt={name} className="char-image" />
      <div className="img-details">
        <h3 className="char-name">{name}</h3>
        <p className="race-gender">
          {race} - {gender}
        </p>
        <p>
          <strong>Affiiation : </strong>
          {affiliation}
        </p>
        <p>
          <strong>Ki : </strong>
          {ki}
        </p>
        <p>
          <strong>Total Ki : </strong>
          {maxKi}
        </p>
      </div>
    </div>
  );
};

export default CharDetails;
