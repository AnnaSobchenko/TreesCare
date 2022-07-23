import AuthForm from "../../components/AuthForm/AuthForm";
import { ToastContainer } from "react-toastify";
import s from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={`container ${s.authPage}`}>
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
