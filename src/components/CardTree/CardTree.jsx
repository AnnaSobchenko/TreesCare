import { useDispatch, useSelector } from "react-redux";
import { getIsAdmin, getIsLoggedIn } from "../../redux/auth/authSelector";
import { delUserById, getAllUsers } from "../../redux/user/userOperations";
import s from "./CardTree.module.scss";
const TreeImg = require("../../images/spruce.jpg");

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

  const {
    age,
    condition,
    image,
    kindOfTree,
    location,
    necessaryWorks,
    radius,
    registrationNumber,
  } = contact;
  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt="image" />
      <div>
        <h2 className={s.title}>{kindOfTree}</h2>
        <p className={s.text}>Radius: {radius} m</p>
        <p className={s.text}>Age: {age}</p>
        <p className={s.text}>Condition: {condition}</p>
        {/* <p className={s.text}>
          Registration Number: "9ca7fa2c-627f-4d4c-9f06-5081d96d58bc"
        </p> */}
        <p className={s.text}>
          Location: {location.lat}, {location.lng}
        </p>
        <p className={s.text}> {necessaryWorks} </p>
      </div>
    </div>
  );
};

export default CardTree;
