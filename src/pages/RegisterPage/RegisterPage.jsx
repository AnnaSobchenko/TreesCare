import AuthForm from "../../components/AuthForm/AuthForm";
import s from "../LoginPage/LoginPage.module.scss";
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
      <AuthForm isAuth={true} />
    </div>
  );
};

export default RegisterPage;
