import { getFilterValue } from "../../redux/user/userSelector";
import s from "./TreesList.module.scss";
import { useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
// import { delUserContact, getContact } from "../../redux/user/userOperations";

import img from "../../images/favicon.png";
import Modal from "../../components/Modal/Modal";
import CardTree from "../../components/CardTree/CardTree";

import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import ReactTooltip from "react-tooltip";
import "tippy.js/dist/tippy.css";

const initalArr = [
  { lat: 50.879, lang: 4.6997, nodeName: "sdfg", id: "45655665456" },
  { lat: 50.888, lang: 4.6997, nodeName: "yyyy", id: "44555643222" },
  { lat: 50.899, lang: 5.6997, nodeName: "yyyiuuh", id: "33222222222" },
];

const TreesList = () => {
  const userFilterValue = useSelector(getFilterValue);
  const userEmail = useSelector(getUserEmail);

  const [anchor, setAnchor] = useState(50.879, 4.6997);
  const [payload, setPayload] = useState("ergrytuyjtrr");
  const [showInfo, setShowInfo] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  console.log("modalInfo :>> ", modalInfo);

  const mapClick = (e) => {
    setAnchor(e.latLng);
    setShowBtn(false);
  };
  const test = ({ event, anchor, payload }) => {
    console.log({ event, anchor, payload });

    setShowBtn(true);
  };

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
  const handleOpenModal = (id) => {
    console.log("id :>> ", id);
    // const email = e.currentTarget.id;
    openModal("userInfo");
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContact({ email: userEmail }));
  // }, []);

  // const delContact = async (id) => {
  //   await dispatch(delUserContact({ contactId: id, email: userEmail }));
  //   dispatch(getContact({ email: userEmail }));
  // };

  return (
    <section className={s.treesSection}>
      <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11} onClick={mapClick}>
        <Marker
          width={30}
          anchor={anchor}
          color="red"
          payload={payload}
          onClick={({ event, anchor, payload }) =>
            test({ event, anchor, payload })
          }
        />

        {initalArr.map(({ lat, lang, nodeName, id }) => (
          <Marker
            width={30}
            anchor={[lat, lang]}
            // value={}
            color="green"
            key={nodeName}
            onClick={() => handleOpenModal(id)}
            // onMouseOver={() => setModalInfo(true)}
            // onMouseOut={() => setModalInfo(false)}
          />
        ))}
        {modal.open && (
          <Modal handleClose={closeModal} checker={true}>
            <CardTree contact={modal.content} closeModal={closeModal} />
          </Modal>
        )}
        {showInfo && (
          <Overlay anchor={anchor} offset={[120, 79]}>
            {payload}
            {/* <img src="/img/pigeon.jpg" width={240} height={158} alt="" /> */}
          </Overlay>
        )}
        {showBtn && <button>Add</button>}
      </Map>
    </section>
    // <div>
    //   <ul className={s.items}>
    //     {userFilterValue.map(({ id, name, number }) => (
    //       <li key={id} className={s.item}>
    //         <p className={s.text} >{name}</p>
    //         <p className={s.text}>{number}</p>
    //         <button
    //           type="submit"
    //           className={s.btn}
    //           onClick={() => delContact(id)}
    //         >
    //           delete
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default TreesList;
