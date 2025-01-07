import { Routes, Route, Link } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import AdminHome from "./components/AdminHome";
import DirectorHome from "./components/DirectorHome";
import IPManagerHome from "./components/IPManagerHome";
import ProjectManagerHome from "./components/ProjectManagerHome";
import SiteOperatorHome from "./components/SiteOperatorHome";

import "./App.css";
import { useSelector } from "react-redux";
import LogoutComp from "./components/LogoutComp";
import UpdateForm from "./components/UpdateForm";
function App() {
  const mystate = useSelector((state) => state.logged);
  return (
    <div className="app-content">
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav className=" navbar navbar-expand-sm bg-light mb-3">
          <div className=" container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-3 nav-links "
                  style={{ color: "orange" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link px-3 nav-links"
                  style={{ color: "orange" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/director" element={<DirectorHome />} />
        <Route path="/ipmanager" element={<IPManagerHome />} />
        <Route path="/projectmanager" element={<ProjectManagerHome />} />
        <Route path="/siteoperator" element={<SiteOperatorHome />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/logout" element={<LogoutComp />} />
        <Route path="/update" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
