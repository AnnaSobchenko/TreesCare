import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/theme/themeSelector";
import s from "./Footer.module.scss";

const Footer = () => {
  const theme = useSelector(getTheme);
  return (
    <footer className={s.footerContainer} style={{
      backgroundColor:
        theme === "light"
        ? "var(--primary-bg-color)"
        : "var(--second-bg-color)",
      color: theme === "light" ? "black" : "white",
    }}>
      <p>
      © 2022 | All Rights Reserved |&nbsp;</p><p> Developed with
           <span className={s.footerHeart}> ❤ </span> &zwnj;
      by BC13</p>
    </footer>
  );
};

export default Footer;