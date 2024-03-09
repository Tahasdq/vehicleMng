import React from 'react'

const GuOfTheDay = () => {
  const Occurance_hold = [
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
  ];
  return (
    <div className="container-fluid">
      <div className="Dashboard_heading">
        <h3>Occurance Hold</h3>
      </div>

      <div className="row">
      <div className="col-md-4 col-sm-12 ">
        {Occurance_hold.map((v, i) => {
         return (
            <div className="col-md-12 colsm-12 occurance_holds">
              <h4>Phone : {v.phone} </h4>
              <h4>Applicant : {v.Applicant} </h4>
              </div>
          );
        })}
         </div>



        <div className="col-md-4 col-sm-12 ">
         <div className="Avaliable_gar"> 
            <h1>Avaliable Garizons</h1>
          <ul>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
          </ul>
          </div>
        
          <div className="button mt-3 text-center">
          <a href="" className="btn btn-primary " style={{padding:"10px 120px"}}> Dispatch</a>

          </div>


        </div>
      </div>
    </div>
  );
}

export default GuOfTheDay