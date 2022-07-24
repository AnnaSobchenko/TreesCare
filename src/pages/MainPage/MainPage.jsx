import { NavLink } from "react-router-dom";
import s from "./MainPage.module.scss";
import { getTheme } from "../../redux/theme/themeSelector";

import React from "react";
import { useSelector } from "react-redux";

const Logo = require("../../images/logo.png");

const MainPage = () => {
  const theme = useSelector(getTheme);
  return (
    <section
      className={`container ${s.main}`}
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--second-bg-color)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className={s.wrapper}>
        <img src={Logo} alt="logo" width={220} />
        <p className={s.mainText}>
          Це платформа для спостереження та паспортизації дерев
        </p>
        <p className={s.text}>
          На жаль, сьогодні це відбувається в паперовому вигляді і на це
          витрачаються гроші та ресурси без видимого результату — паспорти
          знаходяться в паперових архівах, недоступні волонтерам і тим, хто
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
