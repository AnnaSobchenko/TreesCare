import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardUser from "../../components/CardUser/CardUser";
import Modal from "../../components/Modal/Modal";
import { getAllUsers } from "../../redux/user/userOperations";
import { getUsers } from "../../redux/user/userSelector";
import s from "./UsersPage.module.scss";

const UsersPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const users = useSelector(getUsers);
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
    const userInfo=users.find((el)=>el.email===email)
    openModal(userInfo);
  };

  

  return (
    <section className={`container`}>
      <ul className={s.list}>
        {users.map((user) => (
          <li
            key={user._id}
            id={user.email}
            onClick={(e) => handleOpenModal(e)}
          >
            <p className={s.text__name}>{user.name}</p>
            <p className={s.text__email}>{user.email}</p>
            
          </li>
        ))}
      </ul>
      {modal.open && (
        <Modal handleClose={closeModal} checker={true}>
          <CardUser contact={modal.content} closeModal={closeModal}/>
        </Modal>
      )}
    </section>
  );
};

export default UsersPage;
