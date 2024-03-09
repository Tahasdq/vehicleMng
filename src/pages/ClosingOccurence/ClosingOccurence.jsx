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
    <div className='custom-container'>
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Ocorrências atendidas
</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {Occurance_hold.map((v, i) => {
              return (
                <div className="col-md-12 col-sm-12 my-3 occurance_holds row">
                  <div className="col-md-10 row">
                  
                  <div className="col-md-3 col-sm-12">
                    <h6>Telefone : {v.phone} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Candidato : {v.Applicant} </h6>
                  </div>
                 
                  <div className="col-md-6  col-sm-12">
                    <h6>Garnição deixando a cena : {v.Gu_leaving_the_scence} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Bonde : {v.tram} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Rua : {v.Address} </h6>
                  </div>
                  
                  <div
                    className="col-md-6 col-sm-12 gu_list"
                    style={{ display: "flex" }}
                  >
                    <h6> Gu Lista : </h6>
                    <ol className='attended' type="1">
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