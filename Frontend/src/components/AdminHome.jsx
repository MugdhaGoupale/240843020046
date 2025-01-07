import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  console.log(userid);
  console.log(userData.fname);

  useEffect(() => {
    fetch("http://localhost:8080/getUser/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <div>
      <nav className=" navbar navbar-expand-sm bg-light mb-3">
        <div className=" container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/logout"
                className="nav-link px-3 nav-links "
                style={{ color: "orange" }}
              >
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                New Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/update"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                Update User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
      <h1>AdminHome</h1>
      <button
        className="btn btn-danger"
        onClick={() =>
          confirm("Do you want to logout?")
            ? navigate("/logout")
            : navigate("/admin")
        }
      >
        logout
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => navigate("/register")}
      >
        New Registration
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/update")}
      >
        Update
      </button>
      <h2>Welcome {userData.fname}</h2>
    </div>
  );
};

export default AdminHome;
