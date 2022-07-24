import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { onPhoneFormReset } from "../../redux/user/userSlice";
import s from "./TreeForm.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getTheme } from "../../redux/theme/themeSelector";
import FormikSelect from "../_shared/LabelForm/FormikSelect";
import { addTree } from "../../redux/trees/treesOperations";
import { TreeValidationSchema } from "../../utils/validation/TreeValid";

export default function TreeForm() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const treeTypes = [
    {
      options: [
        { label: "Дуб", value: "oak" },
        { label: "Береза", value: "birch" },
        { label: "Абрикос", value: "apricot" },
        { label: "Іва", value: "willow" },
        { label: "Каштан", value: "chestnut" },
        { label: "Липа", value: "linden" },
        { label: "Платан", value: "sycamore" },
        { label: "Осина", value: "aspen" },
      ],
    },
  ];
  const treeOlds = [
    {
      options: [
        { label: "1-3 ", value: "1-3" },
        { label: "4-10 ", value: "4-10" },
        { label: "11-20", value: "11-20" },
        { label: "21-30", value: "21-30" },
        { label: "31-40", value: "31-40" },
        { label: "41-50", value: "41-50" },
        { label: "51-100", value: "51-100" },
      ],
    },
  ];
  const radius = [
    {
      options: [
        { label: "<1 ", value: "<1" },
        { label: "1 ", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
    },
  ];

  return (
    <div className={s.wrapper}>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Formik
        initialValues={{
          radius: "others",
          treeType: "other",
          treeOld: "other",
          checked: [],
        }}
        // validationSchema={TreeValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          dispatch(addTree({ form: values, method: "add" }));
          toast.success("tree adds to list");
          resetForm();
          // onHandleClose();
        }}
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
            <h2 className={s.authFormTitle2}>Паспорт нового дерева</h2>
            <form onSubmit={handleSubmit} className={s.authFormInput}>
              <label className={s.label}>
                Радіус
                <Field
                  name="radius"
                  component={FormikSelect}
                  value={values.radius}
                  onChange={handleChange}
                  options={radius}
                />
                <ErrorMessage
                  component="div"
                  name="radius"
                  className={s.errorMessage}
                />
              </label>

              <labell className={s.label}>
                Кількість років
                <Field
                  name="treeOld"
                  component={FormikSelect}
                  value={values.treeOld}
                  onChange={handleChange}
                  options={treeOlds}
                />
                <ErrorMessage
                  component="div"
                  name="treeOld"
                  className={s.errorMessage}
                />
              </labell>

              <labell className={s.label}>
                Вид дерева
                <Field
                  name="treeType"
                  component={FormikSelect}
                  value={values.treeType}
                  onChange={handleChange}
                  options={treeTypes}
                />
                <ErrorMessage
                  component="div"
                  name="treeType"
                  className={s.errorMessage}
                />
              </labell>

              <div role="group" aria-labelledby="checkbox-group">
                <div>
                  <labell className={s.label_checkbox}>
                    <Field type="checkbox" name="checked" value="resize" />
                    Чи неохідно обрізати
                    {/* <ErrorMessage
                      component="div"
                      value="resize"
                      className={s.errorMessage}
                    /> */}
                  </labell>
                </div>
                <div>
                  <labell className={s.label_checkbox}>
                    <Field type="checkbox" name="checked" value="cut" />
                    "Необхідно підстригти крону"
                    {/* <ErrorMessage
                      component="div"
                      value="cut"
                      className={s.errorMessage}
                    /> */}
                  </labell>
                </div>
                <div>
                  <labell className={s.lalabel_checkboxbel}>
                    <Field type="checkbox" name="checked" value="colorize" />
                    "Необхідно кольорувати"
                    {/* <ErrorMessage
                      component="div"
                      value="colorize"
                      className={s.errorMessage}
                    /> */}
                  </labell>
                </div>
                <div>
                  <labell className={s.label_checkbox}>
                    <Field type="checkbox" name="checked" value="cut off" />
                    "Необхідно зрізати"
                    {/* <ErrorMessage
                      component="div"
                      value="cut off"
                      className={s.errorMessage}
                    /> */}
                  </labell>
                </div>
                <div>
                  <labell className={s.label_checkbox}>
                    <Field type="checkbox" name="checked" value="change" />
                    "Необхідно замінити на нове"
                    {/* <ErrorMessage
                      component="div"
                      value="change"
                      className={s.errorMessage}
                    /> */}
                  </labell>
                </div>
              </div>

              <button
                type="submit"
                className={s.btn}
                style={{
                  color: theme === "light" ? "black" : "white",
                }}
              >
                submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
