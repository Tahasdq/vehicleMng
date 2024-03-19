import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'


const ServiceList = () => {

  const [data , setData] = useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:3000/getnewoccuranceAll")
    .then((response) => {
      // Set the fetched data in state
      setData(response.data);
      // console.log(response.data)
      // console.log(data)
    })
    .catch((error) => {
      // Handle errors, if any
      console.error("Error fetching data:", error);
    });

  },[])

 

  return (
    <div>
      <div className="container">

        {/* <div className=" row Dashboard_heading">
        <h3>Service</h3>
      </div> */}

{data.map((v,i)=>{
  const id = v._id;
  console.log(id)
return(
  <Link to={`/service/listchild/${id}`} >
  <div className="col-md-12 col-sm-12">
      
      <div className="list mt-5"> 

            <h4>Telephono : {v.phone} </h4>
            <h4>Solicitante : {v.Applicant} </h4>
            <h4>Rua : {v.Street}</h4>
            <h4>Occurance Code : {v.occurance_Code}</h4>
        </div>
      </div>
      </Link>
)

})}


 {/* <Outlet/> */}

       </div>
    </div>
  )
}

export default ServiceList  