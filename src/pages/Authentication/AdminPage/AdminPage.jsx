import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import LogoutIcon from "@mui/icons-material/Logout";

const Login = ({onLogout}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [designationError, setDesignationError] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token1");
    localStorage.removeItem("isLoggedIn");
    navigate('/login', { replace: true });
    onLogout()
  };
 

  useEffect(() => {
    const token = localStorage.getItem("token1");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token1");
        navigate("/login");
      } else {
        navigate("/admin/dashboard");
      }
    }
  }, []);

  const validation = () => {
    setUserNameError("");
    setPasswordError("");
    setDesignationError("");

    // Check if the user has entered both fields correctly
    if ("" === username) {
      setUserNameError("Please enter your username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    if (designation.length < 7) {
      setDesignationError("The designation must be 8 characters or longer");
      return;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You'll update this function later...
    if (validation()) {
      console.log("validation done");
      axios
        .post("http://localhost:3000/admin/dashboard/registerUser", {
          username,
          password,
          designation,
        })
        .then((res) => {
          console.log(res.data);
          setSubmitStatus("success");
          setTimeout(() => {
            setSubmitStatus(null);
          }, 2000);
          setUserName("");
          setDesignation("");
          setPassword("");
          console.log("data send");
        })
        .catch((err) => {
          console.log(err);

          setSubmitStatus("error");
          setTimeout(() => {
            setSubmitStatus(null);
          }, 2000);
        });
    }
  };

  return (
    <>
      {submitStatus === "success" && (
        <div
          className="alert alert-success"
          style={{ width: "20%" }}
          role="alert"
        >
          Submitted successfully
        </div>
      )}
      {submitStatus === "error" && (
        <div
          className="alert alert-danger"
          style={{ width: "20%" }}
          role="alert"
        >
          An error occurred
        </div>
      )}

      <div onClick={handleLogout}>
        <LogoutIcon
          sx={{ fontSize: 40 }}
          style={{ color: "red", width: "100%", cursor: "pointer" }}
        />
      </div>
      <div className={"mainContainer"}>
        <div className="viewItems">
          <button className="btn btn-primary">
            <Link to="/admin/dashboard/viewitems" style={{ color: "white" }}>
              View Items
            </Link>
          </button>
        </div>
        {/* <Outlet/> */}
        <div className={"titleContainer"}>
          <div>Resigter User</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={username}
            placeholder="Enter username"
            onChange={(ev) => setUserName(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{userNameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            type="password"
            placeholder="Enter password "
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={designation}
            placeholder="Enter Designation here "
            onChange={(ev) => setDesignation(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{designationError}</label>
        </div>
        <br />
        <div
          style={{ flexDirection: "row", gap: "20px" }}
          className={"inputContainer"}
        >
          <input
            className="inputButton btn btn-primary px-5 py-2 text-center"
            type="submit"
            onClick={(e) => handleLogin(e)}
            value="Register User"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
