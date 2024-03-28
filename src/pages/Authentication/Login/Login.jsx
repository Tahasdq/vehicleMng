// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import axios from "axios";
// const Login = ({ onLoginSucess }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userNameError, setUserNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const validation = () => {
//     setUserNameError("");
//     setPasswordError("");

//     // Check if the user has entered both fields correctly
//     if ("" === username) {
//       setUserNameError("Please enter your username");
//       return;
//     }

//     if ("" === password) {
//       setPasswordError("Please enter a password");
//       return;
//     }

//     if (password.length < 7) {
//       setPasswordError("The password must be 8 characters or longer");
//       return;
//     }
//   };
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const { name } = e.target;
//     console.log("usertype is ", name);
//     // You'll update this function later...

//     if (name) {
//       if (name === "user") {
//         axios
//           .post("http://localhost:3000/userLogin", { username, password })
//           .then((res) => {
//             console.log("res.user is ", res.data.user);
//             if (res.data.user) {
//               alert("Login successfull");
//               console.log("user entered");
//               localStorage.setItem("token", res.data.user);
//               onLoginSucess(true);
//               navigate("/");
//             } else {
//               alert("check your username and password");
//             }
//           });

//         // onLoginSucess(name);

//         // Redirect to appropriate route
//         // if (name === 'user') {
//         //   navigate('/');
//         // } else if (name === 'admin') {
//         //   navigate('/admin/dashboard');
//         // }
//       } else if (name === "admin") {

//         axios
//         .post("http://localhost:3000/userLogin", { username, password ,isAdmin:true })
//         .then((res) => {
//           console.log("res.user is ", res.data.user);
//           if (res.data.user) {
//             alert("Login successfull");
//             console.log("user entered");
//             localStorage.setItem("token1", res.data.user);
//             // onLoginSucess(true);
//             navigate("/admin/dashboard");
//           } else {
//             alert("check your username and password");
//           }
//         });
       
//       }
//     }
//   };

//   return (
//     <div className={"mainContainer"}>
//       <div className={"titleContainer"}>
//         <div>LOGIN</div>
//       </div>
//       <br />
//       <div className={"inputContainer"}>
//         <input
//           value={username}
//           placeholder="Enter your username here"
//           onChange={(ev) => setUsername(ev.target.value)}
//           className={"inputBox"}
//         />
//         <label className="errorLabel">{userNameError}</label>
//       </div>
//       <br />
//       <div className={"inputContainer"}>
//         <input
//           value={password}
//           type="password"
//           placeholder="Enter your password here"
//           onChange={(ev) => setPassword(ev.target.value)}
//           className={"inputBox"}
//         />
//         <label className="errorLabel">{passwordError}</label>
//       </div>
//       <br />
//       <div
//         style={{ flexDirection: "row", gap: "20px" }}
//         className={"inputContainer"}
//       >
//         <input
//           className="inputButton btn btn-primary px-5 py-2 text-center"
//           type="button"
//           onClick={(e) => handleLogin(e)}
//           value="Login as User"
//           name="user"
//         />
//         <input
//           className="inputButton btn btn-primary px-5 py-2 text-center"
//           type="button"
//           onClick={(e) => handleLogin(e)}
//           name="admin"
//           value="Login as Admin"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const token1 = localStorage.getItem("token1");
    if (token) {
      navigate("/");
    } else if (token1) {
      console.log("token1 exist");
      navigate("/admin/dashboard/");
    }
  }, [navigate]);



  const validation = () => {
    setUserNameError("");
    setPasswordError("");

    if ("" === username) {
      setUserNameError("Please enter your username");
      return false;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return false;
    }

    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("admin called" ,e.target.name);
    if (validation()) {
      axios
        .post("http://localhost:3000/userLogin", { username, password, isAdmin: e.target.name === 'admin' })
        .then((res) => {
          console.log("res.user is ", res.data.user);
          if (res.data.user) {
            alert("Login successful");
            if (e.target.name === "admin") {
              localStorage.setItem("token1", res.data.user);
              navigate("/admin/dashboard/");
            } else {
              localStorage.setItem("token", res.data.user);
              navigate("/");
            }
            onLoginSuccess(true);
          } else {
            alert("Check your username and password");
          }
        });
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
         <div>LOGIN</div>
     </div>
      <br />
       <div className={"inputContainer"}>
        <input
          value={username}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{userNameError}</label>
      </div>
      <br />
       <div className={"inputContainer"}>
        <input
       value={password}
         type="password"
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
        className={"inputBox"}
      />
      <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div
      style={{ flexDirection: "row", gap: "20px" }}
      className={"inputContainer"}
    >
      <input
       className="inputButton btn btn-primary px-5 py-2 text-center"
       type="button"
       onClick={(e) => handleLogin(e)}
      value="Login as User"
        name="user"
      />
      <input
        className="inputButton btn btn-primary px-5 py-2 text-center"
        type="button"
        onClick={(e) => handleLogin(e)}
        name="admin"
        value="Login as Admin"
      />
    </div>
  </div>
  );
};

export default Login;
