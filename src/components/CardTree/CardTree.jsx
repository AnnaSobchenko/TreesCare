import { useDispatch, useSelector } from "react-redux";
import { getIsAdmin, getIsLoggedIn } from "../../redux/auth/authSelector";
import { delUserById, getAllUsers } from "../../redux/user/userOperations";
import s from "./CardTree.module.scss";
const TreeImg = require("../../images/spruce.jpg");
const tree = {
  age: "13",
  condition: "good",
  image: "tree123.jpg",
  kindOfTree: "spruce",
  location: { lat: 20.99835602, lng: 27.01502627 },
  necessaryWorks: "[{cut:false}]",
  radius: "11",
  registrationNumber: "566121218754",
  __v: 0,
  _id: "6",
};

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
      <img className={s.img} src={TreeImg} alt="" />
      <div>
        <h2 className={s.title}>Kind of tree: "spruce"</h2>
        <p className={s.text}>Radius: '11' m</p>
        <p className={s.text}>Age: '40'</p>
        <p className={s.text}>Condition: "good"</p>
        <p className={s.text}>
          Registration Number: "9ca7fa2c-627f-4d4c-9f06-5081d96d58bc"
        </p>
        <p className={s.text}>Location:</p>
        <p className={s.text}> necessaryWorks</p>
      </div>
    </div>
  );
};

export default CardTree;
