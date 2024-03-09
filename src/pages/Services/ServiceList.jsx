import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ServiceList = () => {

  const list = [
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" }

  ]
  return (
    <div>
      <div className="container">

        {/* <div className=" row Dashboard_heading">
        <h3>Service</h3>
      </div> */}

{list.map((v,i)=>{
return(
  <div className="col-md-8 col-sm-12">
      
      <div className="list mt-5">
            <h4>Telephono : {v.phone} </h4>
            <h4>Candidato : {v.Applicant} </h4>
        </div>
      </div>
)

})}



      </div>
    </div>
  )
}

export default ServiceList  