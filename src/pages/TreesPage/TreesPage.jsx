import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
    <ToastContainer
        position={toast.POSITION.TOP_CENTER} //"top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        enableMultiContainer
        containerId={"B"}
      />
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
