import { getFilterValue } from "../../redux/user/userSelector";
import s from "./TreesList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { useEffect } from "react";
import { getTrees } from "../../redux/trees/treesSelector";

const TreesList = () => {
  const userFilterValue = useSelector(getFilterValue);
  const userEmail = useSelector(getUserEmail);

  const dispatch = useDispatch();
  const treesArray = useSelector(getTrees);

  useEffect(() => {
    dispatch(getTrees());
  }, []);

  // const delContact = async (id) => {
  //   console.log("id", id);
  //   await dispatch(delUserContact({ contactId: id, email: userEmail }));
  //   dispatch(getContact({ email: userEmail }));
  // };

  return (
    <div>
      TreesList
      {/* <ul className={s.items}>
        {treesArray.map(({ id, treeType, radius, treeOld, checked }) => (
          <li key={id}>
            <p>{treeType}</p>
            <p>{radius}</p>
            <p>{treeOld}</p>
            <ul>
              {checked.map((item) => (
                <li key={item + 1}>{item}</li>
              ))}
            </ul>
            <button
              type="submit"
              className={s.btn}
              onClick={() => delContact(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TreesList;
