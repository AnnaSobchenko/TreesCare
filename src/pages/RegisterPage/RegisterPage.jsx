import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./RegisterPage.module.scss";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";

const RegisterPage = () => {
  const theme = useSelector(getTheme);
  return (
    <div
      className={`container ${s.authPage}`}
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--second-bg-color)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      {/* <div className={s.authPageLeft}>
        <h1 className={s.authPageTitle}>IT Revolution</h1>
        <p className={s.authtext}>
          [ The information technology revolution has served as a catalyst for
          electronic connectivity, altered the production function, enhanced
          productivity growth, facilitated the collection of data, spearheaded
          the transmission of ideas and extended the reach of economic and
          social interactions. ]
        </p>
      </div> */}
      <AuthForm isAuth={true} />
    </div>
  );
};

export default RegisterPage;
