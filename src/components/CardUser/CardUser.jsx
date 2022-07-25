import { useDispatch } from "react-redux";
import { delUserById, getAllUsers } from "../../redux/user/userOperations";
import s from "./CardUser.module.scss";

const CardUser = ({ contact, closeModal }) => {
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    const _id = e.target.value;
    console.log("_id :>> ", _id);
    await dispatch(delUserById(_id));
    closeModal(true);
    dispatch(getAllUsers());
  };

  return (
    <div className={s.card}>
      <div className={s.usercard}>
        <p className={s.card__name}>{contact.name}</p>
        <p className={s.card__email}>{contact.email}</p>
        {contact.email !== "admin@mail.com" && (
          <button
            value={contact._id}
            className={s.btn}
            onClick={(e) => handleDelete(e)}
          >
            Delete "{contact.name}"
          </button>
        )}
      </div>
    </div>
  );
};

export default CardUser;
