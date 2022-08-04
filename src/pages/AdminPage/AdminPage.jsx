import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAdminTree from "../../components/CardAdminTree/CardAdminTree";
import { getAllAdmin } from "../../redux/admin/adminOperations";
import { getState, getAdminTrees } from "../../redux/admin/adminSelector";
import { getIsAdmin } from "../../redux/auth/authSelector";
import s from "./AdminPage.module.scss";

const AdminPage = () => {
  const treesAdmin = useSelector(getAdminTrees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdmin());
  }, []);

  const trees = useSelector(getState); 

  return (
    <section className={`container `}>
      <ul className={s.list}>
        {Boolean(trees.treesAdmin.length) &&
          treesAdmin.map((tree) => (
            <li key={tree._id} id={tree.trees.registrationNumber}>
              <CardAdminTree contact={tree.trees} method={tree.method} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default AdminPage;
