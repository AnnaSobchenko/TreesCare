import s from "./TreesList.module.scss";
import img from "../../images/favicon.png";
import Modal from "../../components/Modal/Modal";
import CardTree from "../../components/CardTree/CardTree";

import React, { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

import { getAllTrees } from "../../redux/trees/treesOperations";
import { useDispatch, useSelector } from "react-redux";
import { getTrees } from "../../redux/trees/treesSelector";

const TreesList = () => {
  const [anchor, setAnchor] = useState([49.23435015414822, 28.458172138820828]);
  const [payload, setPayload] = useState("ergrytuyjtrr");
  // const [showInfo, setShowInfo] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  // const [modalInfo, setModalInfo] = useState(false);

  const dispatch = useDispatch();
  const allTrees = useSelector(getTrees);

  const mapClick = (e) => {
    setAnchor(e.latLng);
    console.log("e.latLng :>> ", e.latLng);
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
  const handleOpenModal = (data) => {
    // const email = e.currentTarget.id;
    openModal(data);
  };

  useEffect(() => {
    dispatch(getAllTrees());
  }, []);

  return (
    <section className={s.treesSection}>
      <Map
        defaultCenter={[49.23435015414822, 28.458172138820828]}
        defaultZoom={11}
        onClick={mapClick}
      >
        <Marker
          width={30}
          anchor={anchor}
          color="red"
          payload={payload}
          onClick={({ event, anchor, payload }) =>
            test({ event, anchor, payload })
          }
        />

        {allTrees.map((data) => {
          const {
            age,
            condition,
            image,
            kindOfTree,
            location,
            necessaryWorks,
            radius,
            registrationNumber,
          } = data;
          return (
            <Marker
              width={radius}
              anchor={[location.lat, location.lng]}
              // value={}
              color="green"
              key={registrationNumber}
              onClick={() => handleOpenModal(data)}
            />
          );
        })}
        {modal.open && (
          <Modal handleClose={closeModal} checker={true}>
            <CardTree contact={modal.content} closeModal={closeModal} />
          </Modal>
        )}

        {showBtn && <button>Add</button>}
      </Map>
    </section>
  );
};

export default TreesList;
