import { ErrorMessage } from "formik";
import s from "./FormikInput.module.scss";

const FormikInput = ({ type, handleChange, handleBlur, values }) => {
  return (
    <>
      <input
        className={s.input}
        type={type}
        name={type}
        placeholder="Fill the gap"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.type}
      />
      <ErrorMessage component="div" name={type} className={s.errorMessage} />
    </>
  );
};

export default FormikInput;
