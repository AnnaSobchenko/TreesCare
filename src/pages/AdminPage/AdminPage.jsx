import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardTree from "../../components/CardTree/CardTree";
import Modal from "../../components/Modal/Modal";
import { getAllAdmin } from "../../redux/admin/adminOperations";
import { getState, getAdminTrees } from "../../redux/admin/adminSelector";
import { getIsAdmin } from "../../redux/auth/authSelector";
import s from "./AdminPage.module.scss";

const AdminPage = () => {
  const isAdmin = useSelector(getIsAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdmin());
  }, []);

  const trees = useSelector(getState);
  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  const openModal = (content) => {
    setModal({
      open: true,
      content,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      content: null,
    });
  };
  const handleOpenModal = (e) => {
    const email = e.currentTarget.id;
    const userInfo = trees.find((el) => el.email === email);
    openModal(userInfo);
  };
  const treesAdmin = useSelector(getAdminTrees);
  return (
    <section className={`container ${s.main}`}>
      <ul className={s.list}>
        {Boolean(trees.treesAdmin.length) &&
          treesAdmin.map((tree) => (
            <li
              key={tree._id}
              id={tree.registrationNumber}
              onClick={(e) => handleOpenModal(e)}
            >
              <p className={s.text__name}>{tree.trees.kindOfTree}</p>
              <p className={s.text__name}>{tree.trees.age}</p>
              {isAdmin && (
                <button className={s.text__email}> {tree.method}</button>
              )}
            </li>
          ))}
      </ul>
      {modal.open && (
        <Modal handleClose={closeModal} checker={true}>
          <CardTree contact={modal.content} closeModal={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default AdminPage;
