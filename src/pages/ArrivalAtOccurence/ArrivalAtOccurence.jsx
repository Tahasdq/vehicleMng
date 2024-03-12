import React from 'react'

const ArrivalAtOccurence = () => {
  const Occurance_hold = [
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"},
    { phone: "123455", Applicant: "Mahad" ,tram:"Toyota",Gu_leaving_the_scence:"12am", Address : "abc street"}
  ];
  return (
    <div className='custom-container' >
  <div className="container">
      <div className="Dashboard_heading">
        <h3>Ocorrências sendo Atendidas</h3>
        <hr />
      </div>
      <div className="row">
      <div className="col-md-8 col-sm-12 " style={{marginTop: "13px", marginRight: "10px"}}>
        {Occurance_hold.map((v, i) => {
         return (
            <div className="col-md-12 col-sm-12 my-3 occurance_holds row">
              <div className="col-md-4 col-sm-12">
              <h6 >Telefone : {v.phone} </h6>
              </div>
              <div className="col-md-4 col-sm-12">
              <h6 >Candidato : {v.Applicant} </h6>
              </div>
             
              <div className="col-md-4 col-sm-12">
              <h6 >Bonde : {v.tram} </h6>
              
              </div>
              <div className="col-md-4 col-sm-12">
              <h6>Rua : {v.Address} </h6>

           </div>
           <div className="col-md-6 col-sm-12">
              <h6> Garnição deixando a cena: {v.Gu_leaving_the_scence} </h6>
              
              </div>
              </div>
          );
        })}
         </div>



        <div className="col-md-4 col-sm-12 my-3 ">
         <div className="Avaliable_gar"> 
            <h3>Garnição Disponível</h3>
          <ul>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
          </ul>
          </div>
        
          <div className="button mt-3 text-center">
          <a href="" className="btn btn-primary tola" style={{padding:"10px 120px"}}> Despatcho</a>

          </div>


        </div>
      </div>
    </div>


    </div>
  )
}

export default ArrivalAtOccurence