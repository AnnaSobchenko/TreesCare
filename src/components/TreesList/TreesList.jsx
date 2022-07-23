import { getFilterValue } from "../../redux/user/userSelector";
import s from "./TreesList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { delUserContact, getContact } from "../../redux/user/userOperations";

import img from "../../images/favicon.png";

import React, { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

const TreesList = () => {
  const userFilterValue = useSelector(getFilterValue);
  const userEmail = useSelector(getUserEmail);

  const [anchor, setAnchor] = useState([50.879, 4.6997]);
  const [payload, setPayload] = useState("ergrytuyjtrr");
  const [showInfo, setShowInfo] = useState(false);

  // onDoubleClickHandler = () => {
  //   clearTimeout(this.timer);
  //   this.prevent = true;
  //   this.setState(
  //     {
  //       displayText: "Double Click",
  //     },
  //     () => {
  //       console.log(this.state);
  //       setTimeout(() => {
  //         this.prevent = false;
  //       }, this.delay);
  //     }
  //   );
  // };

  const mapClick = (e) => {
    console.log("e :>> ", e);
    console.log("click on map");
    setAnchor(e.latLng);
  };
  const test = ({ event, anchor, payload }) => {
    console.log({ event, anchor, payload });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact({ email: userEmail }));
  }, []);

  const delContact = async (id) => {
    console.log("id", id);
    await dispatch(delUserContact({ contactId: id, email: userEmail }));
    dispatch(getContact({ email: userEmail }));
  };

  return (
    <Map
      height={300}
      defaultCenter={[50.879, 4.6997]}
      defaultZoom={11}
      onClick={mapClick}
      // zoomSnap={false}
      // onBoundsChanged={() => {
      //   setShowInfo(true);
      // }}
    >
      {/* <Draggable offset={[60, 87]} anchor={anchor}>
          <img src={img} width={50} height={50} alt="Pigeon!" />
        </Draggable> */}
      <Marker
        width={50}
        anchor={anchor}
        color="red"
        payload={payload}
        onClick={({ event, anchor, payload }) =>
          test({ event, anchor, payload })
        }
      />
      {showInfo && (
        <Overlay anchor={anchor} offset={[120, 79]}>
          {payload}
          {/* <img src="/img/pigeon.jpg" width={240} height={158} alt="" /> */}
        </Overlay>
      )}
    </Map>
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
