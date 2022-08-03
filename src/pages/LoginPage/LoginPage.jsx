import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./LoginPage.module.scss";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/themeSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        position={toast.POSITION.TOP_CENTER} //"top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        enableMultiContainer
        containerId={"A"}
      />
      ;
      <AuthForm isAuth={false} />
    </div>
  );
};

export default LoginPage;
