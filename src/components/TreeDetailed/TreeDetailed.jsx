import { useState } from "react";
import Modal from "../Modal/Modal";
const tree = {
  radius: 25,
  age: 12,
  kindOfTree: "red",
  condition: "good",
  registrationNumber: 566645557788778,
  necessaryWorks: [{ cut: false }],
};
const TreeDetailed = () => {
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
    // const userInfo = users.find((el) => el.email === email);
    // openModal(userInfo);
  };

  return (
    // modal.open && (
    //   <Modal handleClose={closeModal} checker={true}>
    //     contact={modal.content} closeModal={closeModal}
    //   </Modal>
    // )
    <></>
  );
};

export default TreeDetailed;
