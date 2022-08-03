import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAdminTree from "../../components/CardAdminTree/CardAdminTree";
import CardTree from "../../components/CardTree/CardTree";
import Modal from "../../components/Modal/Modal";
import { getAllAdmin } from "../../redux/admin/adminOperations";
import { getState, getAdminTrees } from "../../redux/admin/adminSelector";
import { getIsAdmin } from "../../redux/auth/authSelector";
import s from "./AdminPage.module.scss";

const AdminPage = () => {
  const isAdmin = useSelector(getIsAdmin);
  const treesAdmin = useSelector(getAdminTrees);
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

  const handleSendAddTree = (e) => {
    console.log("e", e.target.id);
  };

  return (
    <section className={`container `}>
      <ul className={s.list}>
        {Boolean(trees.treesAdmin.length) &&
          treesAdmin.map((tree) => (
            <li
              key={tree._id}
              id={tree.trees.registrationNumber}
              onClick={(e) => handleOpenModal(e)}
            >
              <CardAdminTree contact={tree.trees} method={tree.method} />
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
