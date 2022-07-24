import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardTree from "../../components/CardTree/CardTree";
import Modal from "../../components/Modal/Modal";
import { getAllUsers } from "../../redux/user/userOperations";
import TreesList from "../../components/TreesList/TreesList";

const TreesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const [modal, setModal] = useState({
    open: false,
    content: null,
  }); 

  const closeModal = () => {
    setModal({
      open: false,
      content: null,
    });
  };

  return (
    <>
      <TreesList />

      {modal.open && (
        <Modal handleClose={closeModal} checker={true}>
          <CardTree contact={modal.content} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default TreesPage;
