import Filter from "../../components/Filter/Filter";
import TreeForm from "../../components/TreeForm/TreeForm";
import TreesList from "../../components/TreesList/TreesList";
import { NavLink } from "react-router-dom";
import s from "./MainPage.module.scss";
const Logo = require("../../images/logo.png");
const MainPage = () => {
  return (
    <section className={`container ${s.main}`}>
      <div className={s.wrapper}>
        <img src={Logo} alt="logo" width={220} />
        <p className={s.mainText}>
          Це платформа для спостереження та паспортизації дерев
        </p>
        <p className={s.text}>
          На жаль, сьогодні це відбувається в паперовому вигляді і на це
          витрачаються гроші та ресурси без видимого результату — паспорти
          знаходяться в паперових архівах, недоступні волентерам і тим, хто
          цікавиться.
        </p>
        <NavLink to="/trees" className={s.link}>
          Розпочати
        </NavLink>
      </div>
      {/* <div className={s.contact_wrapper}>
        <div className={s.contact}>
          <TreeForm />
          <Filter />
          <TreesList />
        </div>
      </div> */}
    </section>
  );
};

export default MainPage;
