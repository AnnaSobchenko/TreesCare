import React, { useState } from "react";
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

export default function TreeForm() {
  const phoneForm = useSelector(getUserPhoneForm);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const userEmail = useSelector(getUserEmail);
  const userContact = useSelector(getUserContacts);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (phoneForm.id) {
      await dispatch(
        updateUserContact({
          name,
          number,
          email: userEmail,
          id: phoneForm.id,
        })
      );
    } else {
      const isIncludes = userContact.some((el) => el.name === name);
      if (isIncludes) {
        setName("");
        setNumber("");
        return toast.error(
          `Very sorry 😞 ${name}, already in the contact list`
        );
      }
      dispatch(addUserContact({ name, number, email: userEmail }));

      toast.success("New contact successfully added 🙂");
    }

    await dispatch(onPhoneFormReset({ name: "", number: "", id: "" }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.label_wrapper}>
        <label className={s.label}>
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            autoComplete="off"
            type="text"
            name="number"
            className={s.input}
            value={number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </form>
  );
}
