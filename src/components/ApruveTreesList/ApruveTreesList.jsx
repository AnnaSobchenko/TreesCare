import { getFilterValue } from "../../redux/user/userSelector";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { delUserContact, getContact } from "../../redux/user/userOperations";
import { useEffect } from "react";
import s from "./ApruveTreesList.module.scss";

const ApruveTreesList = () => {
  const userFilterValue = useSelector(getFilterValue);
  const userEmail = useSelector(getUserEmail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact({ email: userEmail }));
  }, []);

  const delContact = async (id) => {
    console.log("id", id);
    await dispatch(delUserContact({ contactId: id, email: userEmail }));
    dispatch(getContact({ email: userEmail }));
  };

  return (
    <div>
      <ul className={s.items}>
        {userFilterValue.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.text} >{name}</p>
            <p className={s.text}>{number}</p>
            <button
              type="submit"
              className={s.btn}
              onClick={() => delContact(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApruveTreesList;
