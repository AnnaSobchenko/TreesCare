import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./LoginPage.module.scss";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  <ToastContainer
  position="top-center"
  autoClose={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
/>

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
      <AuthForm isAuth={false} />
    </div>
  );
};

export default LoginPage;
