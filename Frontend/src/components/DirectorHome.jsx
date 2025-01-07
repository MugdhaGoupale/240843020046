import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DirectorHome = () => {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div>
      <h1>DirectorHome</h1>
      <button
        className="btn btn-danger"
        onClick={() =>
          confirm("Do you want to logout?")
            ? navigate("/logout")
            : navigate("/director")
        }
      >
        logout
      </button>
      <h2>Welcome {loggedUser.fname}</h2>
    </div>
  );
};

export default DirectorHome;
