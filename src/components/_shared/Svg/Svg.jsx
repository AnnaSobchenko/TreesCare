import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/theme/themeSelector";
import Icons from "../../../images/symbol-defs.svg";
import s from "./Svg.module.scss";

const Svg = ({ name }) => {
  const theme = useSelector(getTheme);
  return (
    <svg
      className={s.navIcon}
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--second-bg-color)",
        // fill: theme === "light" ? "var(--accent-nav-color)" : "white",
      }}
      width="23px"
      height="23px"
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Svg;
