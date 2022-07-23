import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={`container ${s.authPage}`}>
      <div className={s.authPageLeft}>
        <h1 className={s.authPageTitle}>IT Revolution</h1>
        <p className={s.authtext}>
          [ The information technology revolution has served as a catalyst for
          electronic connectivity, altered the production function, enhanced
          productivity growth, facilitated the collection of data, spearheaded
          the transmission of ideas and extended the reach of economic and
          social interactions. ]
        </p>
      </div>
      <AuthForm isAuth={true} />
    </div>
  );
};

export default RegisterPage;
