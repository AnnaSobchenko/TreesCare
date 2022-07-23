import React, { useState } from "react";
import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import {
  addUserContact,
  updateUserContact,
} from "../../redux/user/userOperations";
import {
  getUserContacts,
  getUserPhoneForm,
} from "../../redux/user/userSelector";
import { onPhoneFormReset } from "../../redux/user/userSlice";
import s from "./TreeForm.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getTheme } from "../../redux/theme/themeSelector";
import FormikSelect from "../_shared/LabelForm/FormikSelect";
import { addTree } from "../../redux/trees/treesOperations";

export default function TreeForm() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const treeTypes = [
    {
      options: [
        { label: "Дуб", value: "дуб" },
        { label: "Береза", value: "береза" },
      ],
    },
  ];
  const treeOlds = [
    {
      options: [
        { label: "1-10 ", value: "1-10" },
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
    <div>
      <Formik
        initialValues={{
          radius: "others",
          treeType: "other",
          treeOld: "other",
          checked: [],
        }}
        // validationSchema={treesSchema}
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
            <h2 className={s.authFormTitle2}>"Register"</h2>
            <form onSubmit={handleSubmit} className={s.authFormInput}>
              <label>
                Радіус
                <Field
                  name="radius"
                  component={FormikSelect}
                  value={values.radius}
                  onChange={handleChange}
                  options={radius}
                />
              </label>

              <label>
                Кількість років
                <Field
                  name="treeOld"
                  component={FormikSelect}
                  value={values.treeOld}
                  onChange={handleChange}
                  options={treeOlds}
                />
              </label>

              <label>
                Вид дерева
                <Field
                  name="treeType"
                  component={FormikSelect}
                  value={values.treeType}
                  onChange={handleChange}
                  options={treeTypes}
                />
              </label>

              <div role="group" aria-labelledby="checkbox-group">
                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="resize" />
                    Чи неохідно обрізати
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="cut" />
                    "Необхідно підстригти крону"
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="colorize" />
                    "Необхідно кольорувати"
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="cut off" />
                    "Необхідно зрізати"
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="change" />
                    "Необхідно замінити на нове"
                  </label>
                </div>
              </div>

              <button
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
