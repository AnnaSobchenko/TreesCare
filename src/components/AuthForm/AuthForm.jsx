import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { signin, signup } from "../../redux/auth/authOperations";
import { addIsAdmin } from "../../redux/auth/authSlice";
import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../_shared/LabelForm/LabelForm";
import { getTheme } from "../../redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";
import s from "./AuthForm.module.scss";

const AuthForm = ({ isAuth }) => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // validationSchema={authValidationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className={s.authForm}>
          <h2 className={s.authFormTitle2}>
            {isAuth ? "Register:" : "Login:"}
          </h2>
          <form onSubmit={handleSubmit} className={s.authFormInput}>
            {isAuth && (
              <LabelForm
                type="name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
            )}
            <LabelForm
              type="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />
            <LabelForm
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <div
              className={s.btn}
              style={{
                color: theme === "light" ? "black" : "white",
              }}
            >
              <NavLink
                to={isAuth ? "/login" : "/trees"}
                onClick={() => {
                  toast.success(
                    "A letter has been sent to your e-mail address, follow the link in the letter",
                    { containerId: "A" }
                  );
                  dispatch(!isAuth ? signin(values) : signup(values));
                  values.email === "admin@mail.com" && dispatch(addIsAdmin());
                }}
              >
                submit
              </NavLink>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AuthForm;
