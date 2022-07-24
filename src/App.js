import "./App.scss";
import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/_shared/Loader/Loader";
import AppBar from "./components/_navigations/AppBar/AppBar";
import PrivateRoute from "./components/_routs/PrivatRoute";
import PublicRoute from "./components/_routs/PublicRoute";
import { getIsLoggedIn } from "./redux/auth/authSelector";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TreesPage from "./pages/TreesPage/TreesPage";
import Footer from "./components/_navigations/Footer/Footer";
import { getTheme } from "./redux/theme/themeSelector";
import AdminPage from "./pages/AdminPage/AdminPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const theme = useSelector(getTheme);

  return (
    <div
      className="content"
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--second-bg-color)",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<MainPage />} />
              <Route path="trees" element={<TreesPage />} />
              <Route element={<PublicRoute />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="admin" element={<AdminPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="/" element={<MainPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
