import { getFilterValue } from "../../redux/user/userSelector";
import s from "./TreesList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { delUserContact, getContact } from "../../redux/user/userOperations";

import img from "../../images/favicon.png";

import React, { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import ReactTooltip from "react-tooltip";
import "tippy.js/dist/tippy.css";

const initalArr = [
  { lat: 50.879, lang: 4.6997, nodeName: "sdfg" },
  { lat: 50.888, lang: 4.6997, nodeName: "yyyy" },
  { lat: 50.899, lang: 5.6997, nodeName: "yyyiuuh" },
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact({ email: userEmail }));
  }, []);

  const delContact = async (id) => {
    await dispatch(delUserContact({ contactId: id, email: userEmail }));
    dispatch(getContact({ email: userEmail }));
  };

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

        {initalArr.map(({ lat, lang, nodeName }) => (
          // <div key={nodeName}>
          <Marker
            width={30}
            anchor={[lat, lang]}
            color="green"
            key={nodeName}
            // hover={{ color: "red" }}
            // hover={() => setModalInfo(true)}
            onMouseOver={() => setModalInfo(true)}
            onMouseOut={() => setModalInfo(false)}
          />
          /* <p>gkjjgfkfgf</p> */
          /* {modalInfo && (
              <div anchor={[lat, lang]} offset={[120, 79]} key={nodeName}>
                <img src="/img/pigeon.jpg" width={240} height={158} alt="" />
              </div>
            )} */
          /* </div> */
        ))}

        {/* < ReactTooltip id={nodeName} type="warning" effect="solid">
          <span>Show sad face</span>
        <ReactTooltip/> */}
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
