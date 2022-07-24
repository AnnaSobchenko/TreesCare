import AuthForm from "../../components/AuthForm/AuthForm";
import { ToastContainer } from "react-toastify";
import s from "./LoginPage.module.scss";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";

const LoginPage = () => {
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
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {/* <div className={s.authPageLeft}>
        <h1 className={s.authPageTitle}>Trees Care</h1>
        <p className={s.authtext}>
          [ If you would like to be able to sort or modify trees data, please
          register.]
        </p>
      </div> */}
      <AuthForm isAuth={false} />
    </div>
  );
};

export default LoginPage;
