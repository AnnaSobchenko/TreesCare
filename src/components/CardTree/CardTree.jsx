import s from "./CardTree.module.scss";
// const TreeImg = require("../../images/spruce.jpg");

const CardTree = ({ contact, closeModal }) => {
  const {
    age,
    condition,
    image,
    kindOfTree,
    location,
    necessaryWorks,
    radius,
    registrationNumber,
  } = contact;

  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt="imageTree" />
      <div>
        <h2 className={s.title}>{kindOfTree}</h2>
        <p className={s.text}>Radius: {radius} m</p>
        <p className={s.text}>Age: {age}</p>
        <p className={s.text}>Condition: {condition}</p>
        <p className={s.text}>Registration Number: {registrationNumber}</p>
        <p className={s.text}>
          Location: {location.lat}, {location.lng}
        </p>
        <p className={s.text}> {necessaryWorks} </p>
      </div>
    </div>
  );
};

export default CardTree;
