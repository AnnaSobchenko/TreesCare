import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";
import s from "./CardAdminTree.module.scss";

const CardAdminTree = ({ contact, method, closeModal }) => {
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

  const theme = useSelector(getTheme);
  let works = [];
  Boolean(necessaryWorks) && necessaryWorks.map((el) => works.join(`${el}, "`));

  const handleSendAddTree = (e) => {
    console.log("e", e.target.id);
  };

  return (
    <div className={s.CardAdminTree}>
      <h2 className={s.title}>{kindOfTree.toUpperCase()}</h2>
      <div className={s.card}>
        <img className={s.img} src={image} alt="imageTree" />
        <div>
          <p className={s.text__describe}>Radius</p>
          <p className={s.text}>{radius} m</p>
          <p className={s.text__describe}>Age</p>
          <p className={s.text}>{age}</p>
          <p className={s.text__describe}>Condition: </p>
          <p className={s.text}>{condition}</p>
          <p className={s.text__describe}>Registration Number:</p>
          <p className={s.text}>{registrationNumber}</p>
          <p className={s.text__describe}>Location:</p>
          <p className={s.text}>
            lat: {location.lat} <br /> lng: {location.lng}
          </p>
          <p className={s.text__describe}> necessary works </p>
          {Boolean(necessaryWorks) ? (
            <p className={s.text}> {necessaryWorks} </p>
          ) : (
            <p className={s.text}>... </p>
          )}
        </div>
      </div>
      <div className={s.btn}>
        <button
          id={method}
          className={s.btn__action}
          onClick={(e) => handleSendAddTree(e)}
        >
          {method}
        </button>
        <button className={s.btn__action}>cancel</button>
      </div>
    </div>
  );
};

export default CardAdminTree;
