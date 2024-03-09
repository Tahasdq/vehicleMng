import React from 'react'

const ClosingOccurence = () => {
  const Occurance_hold = [
    {
      phone: "123455",
      Applicant: "Mahad",
      tram: "Toyota",
      Gu_leaving_the_scence: "12am",
      Address: "abc street",
    },
    {
      phone: "123455",
      Applicant: "Mahad",
      tram: "Toyota",
      Gu_leaving_the_scence: "12am",
      Address: "abc street",
    },
    {
      phone: "123455",
      Applicant: "Mahad",
      tram: "Toyota",
      Gu_leaving_the_scence: "12am",
      Address: "abc street",
    },
    {
      phone: "123455",
      Applicant: "Mahad",
      tram: "Toyota",
      Gu_leaving_the_scence: "12am",
      Address: "abc street",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="Dashboard_heading">
          <h3>Occurrences being Attended</h3>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {Occurance_hold.map((v, i) => {
              return (
                <div className="col-md-12 col-sm-12 occurance_holds row">
                  <div className="col-md-10 row">
                  
                  <div className="col-md-3 col-sm-12">
                    <h6>Phone : {v.phone} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Applicant : {v.Applicant} </h6>
                  </div>
                 
                  <div className="col-md-6  col-sm-12">
                    <h6>Gu_leaving_the_scences : {v.Gu_leaving_the_scence} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Tram : {v.tram} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Address : {v.Address} </h6>
                  </div>
                  
                  <div
                    className="col-md-6 col-sm-12 gu_list"
                    style={{ display: "flex" }}
                  >
                    <h6> Gu List : </h6>
                    <ol type="1">
                      <li>
                        {" "}
                        <a href="#" className="btn-1 ">
                          Release
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" className="btn-1 ">
                          Release
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" className="btn-1 ">
                          Release
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" className="btn-1 ">
                          Release
                        </a>
                      </li>
                    </ol>
                  </div>
                  </div>
                  <div className="col-md-2">
                    
               <a href="#" className='btn btn-danger ' style={{padding:"50px 60px"}}><i class="fa-solid fa-trash" style={{fontSize:"25px"}}></i></a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClosingOccurence