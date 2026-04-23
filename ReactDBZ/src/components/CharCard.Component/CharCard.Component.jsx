import "./CharCard.Component.css";

export const CharCard = ({ items }) => {
    const { name, image, race, gender, affiliation, ki, maxKi } = items
    return (
        <div className="char-card">
            <img src={image} alt={name} className="char-image"/>
            <div className="img-details">
            <h3 className="char-name">{name}</h3>
            <p className="race-gender">{race} - {gender}</p>
            <p ><strong>Affiiation : </strong>{affiliation}</p>
            <p><strong>Ki : </strong>{ki}</p>
            <p><strong>Total Ki : </strong>{maxKi}</p>
            </div>
        </div>
    );
}

// export const EachCharacterCard = ({ data }) => {
//   const { id, name, ki, maxKi, race, image, description, gender,affiliation } = data;
//    let characterDetails = [
//     {Affiliation:affiliation},
//     {KI:ki},
//     {"Total KI":maxKi}
//    ];
  
//   return (
//     <div className="each-card">
//       <img src={image} alt={name} className="each-image" />
//       <div className="img-details">
//         <h2 className="def-clr text-title">{name}</h2>
//         <p className="def-clr custom-clr">{race} - {gender}</p>
//          {characterDetails.map((eachInfo,index)=>{
//             let charSpecs=Object.entries(eachInfo)
//             return (
//             <div className="each-info" key={index}>
//                 <p className="def-clr">{charSpecs[0][0]}:</p>
//                 <p className="def-clr custom-clr">{charSpecs[0][1]}</p>
//             </div>
//          )
//          })}