import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewItems = () => {
    const [getRegisteredUser ,setGetRegisteredUser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/admin/dashboard/viewitems/getRegisteredUser")
        .then((res)=>{
            setGetRegisteredUser(res.data)
        })
    },[])
  const data = [
    {
      id: 1,
      UserName: "Taha",
      Password: "password",
      designation: "serviceNew",
    },
    {
      id: 2,
      UserName: "Mahad",
      Password: "password",
      designation: "guoftheday",
    },
    {
      id: 3,
      UserName: "Hunain",
      Password: "password",
      designation: "fame",
    },
  ];
  return (
    <div id="viewpage">
      <div className="view-page-wrapper">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            {getRegisteredUser.map((v, i) => (
              <tr>
                <th scope="row">{i+1}</th>
                <td>{v.username}</td>
                <td>{v.password}</td>
                <td>{v.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewItems;
