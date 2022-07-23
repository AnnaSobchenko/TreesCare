import { useDispatch, useSelector } from "react-redux";
import { getIsAdmin, getIsLoggedIn } from "../../redux/auth/authSelector";
import { delUserById, getAllUsers } from "../../redux/user/userOperations";
import s from "./CardTree.module.scss";

const CardTree = ({ contact, closeModal }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getIsAdmin);
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
        {isLoggedIn && <p className={s.card__email}>{contact.email}</p>}
        {isAdmin && (
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

export default CardTree;
