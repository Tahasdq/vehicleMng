import React from 'react'

const ArrivalAtOccurence = () => {
  const Occurance_hold = [
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"}
  ];
  return (
    <div>
  <div className="container-fluid">
      <div className="Dashboard_heading">
        <h3>Arrival at Scene</h3>
      </div>
      <div className="row">
      <div className="col-md-8 col-sm-12 ">
        {Occurance_hold.map((v, i) => {
         return (
            <div className="col-md-12 col-sm-12 occurance_holds row">
              <div className="col-md-4 col-sm-12">
              <h6 >Phone : {v.phone} </h6>
              </div>
              <div className="col-md-4 col-sm-12">
              <h6 >Applicant : {v.Applicant} </h6>
              </div>
              <div className="col-md-4 col-sm-12">
              <h6> Gu_leaving_the_scence: {v.Gu_leaving_the_scence} </h6>
              
              </div>
              <div className="col-md-4 col-sm-12">
              <h6 >Tram : {v.tram} </h6>
              
              </div>
              <div className="col-md-4 col-sm-12">
              <h6>Address : {v.Address} </h6>
           </div>
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


    </div>
  )
}

export default ArrivalAtOccurence