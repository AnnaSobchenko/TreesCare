import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";
import s from "./CardTree.module.scss";
import Icons from "../../images/symbol-defs.svg";
const Tree = require("../../images/tree.png");
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

  const theme = useSelector(getTheme);
  let works = [];
  Boolean(necessaryWorks) && necessaryWorks.map((el) => works.join(`${el}, "`));

  return (
    <div className={s.cardTree}>
      <div className={s.btn}>
        <h2 className={s.title}>{kindOfTree.toUpperCase()}</h2>
        <button
          className={s.btn__action}
          type="button"
          onClick={() => {
            closeModal(true);
          }}
        >
          <svg
            className={s.navIcon_close}
            style={{
              backgroundColor:
                theme === "light"
                  ? "var(--primary-bg-color)"
                  : "var(--second-bg-color)",
              fill: theme === "light" ? "black" : "white",
            }}
            width="16px"
            height="16px"
          >
            <use xlinkHref={`${Icons}#icon-close`} />
          </svg>
        </button>
      </div>
      <div className={s.card}>
        <img className={s.img} src={Tree} alt="imageTree" />
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
    </div>
  );
};

export default CardTree;
