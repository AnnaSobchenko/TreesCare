import { React } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsAdmin,
  getIsLoggedIn,
  getUserName,
} from "../../../redux/auth/authSelector";
import { logout } from "../../../redux/auth/authOperations";
import SwitchTheme from "../../SwitchTheme/SwitchTheme";
import { getTheme } from "../../../redux/theme/themeSelector";
import Svg from "../../_shared/Svg/Svg";
// import SwitchLang from "../SwitchLang/SwitchLang";

const Logo = require("../../../images/logo.png");
const Tree = require("../../../images/tree.png");

const AppBar = () => {
  const userInfo = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const isAdmin = useSelector(getIsAdmin);

  return (
    <>
      <header
        className={s.header}
        style={{
          backgroundColor:
            theme === "light"
              ? "var(--primary-bg-color)"
              : "var(--second-bg-color)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <div className={s.logo}>
          <NavLink to="/trees">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className={s.header_navLink}>
          <NavLink
            to="/trees"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            {/* &#127795; */}
            <img src={Tree} alt="trees" />
            <p>Tree</p>
          </NavLink>

          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p>Admin</p>
              <Svg name="admins-cards" />
            </NavLink>
          )}
          {isAdmin && (
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p> Users</p>
              <Svg name="users" />
            </NavLink>
          )}

          {!isLoggedIn && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p>Login</p>
              <Svg name="login" />
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p>Register</p>
              <div className={s.register}>
                <Svg name="signup" />
              </div>
            </NavLink>
          )}
        </div>

        <div className={s.logout}>
          {isLoggedIn && (
            <div
              className={s.flex}
              style={{
                backgroundColor:
                  theme === "light"
                    ? "var(--primary-bg-color)"
                    : "var(--second-bg-color)",
                color: theme === "light" ? "black" : "white",
              }}
            >
              <div className={s.name_wrapper}>
                <div
                  className={s.letter_wrapper}
                  style={{
                    backgroundColor: theme === "light" ? "#b3d4af" : "#7c817b",
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  {userInfo.slice(0, 1) && (
                    <span className={s.firs_letter}>
                      {userInfo.slice(0, 1)}
                    </span>
                  )}
                </div>

                {userInfo && (
                  <div className={s.text_transform}>
                    <span className={`${s.name} ${s.animation__scss}`}>
                      {userInfo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
          <SwitchTheme />

          {isLoggedIn && (
            <NavLink
              to="/login"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <div
                className={s.navIconMenu_wrapper}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "var(--primary-bg-color)"
                      : "var(--second-bg-color)",
                  fill: theme === "light" ? "black" : "white",
                }}
              >
                <svg
                  className={s.navIcon_signOut}
                  style={{
                    backgroundColor:
                      theme === "light"
                        ? "var(--primary-bg-color)"
                        : "var(--second-bg-color)",
                    // fill: theme === "light" ? "black" : "white",
                  }}
                  width="16px"
                  height="16px"
                >
                  <use xlinkHref={`${Icons}#icon-sign-out`} />
                </svg>
              </div>
            </NavLink>
          )}
        </div>
        {/* <SwitchLang /> */}
      </header>
      <Outlet className="container" />
    </>
  );
};

export default AppBar;
