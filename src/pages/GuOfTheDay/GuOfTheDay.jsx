import React from 'react'

const GuOfTheDay = () => {
  const Occurance_hold = [
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
    { phone: "123455", Applicant: "Mahad" },
  ];
  return (

    
    <div className="custom-container">
    <div className="container">
      <div className="Dashboard_heading">
        <h3>Ocorrência aguardando atençãon</h3>
        <hr className='my-4'/>
      </div>

      <div className="row">
      <div className="col-md-8 col-sm-12 " style={{marginTop: "13px"}}>
        {Occurance_hold.map((v, i) => {
         return (
            <div className="col-md-12 colsm-12 my-3 occurance_holds">
              <h4>Telefone : {v.phone} </h4>
              <h4>Candidato : {v.Applicant} </h4>
              </div>
          );
        })}
         </div>



        <div className="col-md-4 col-sm-12 ">
         <div className="Avaliable_gar my-3   "> 
            <h3>Garnição Disponível</h3>
          <ul>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
            <li>Avalibel</li>
          </ul>
          </div>
        
          <div className="button mt-3 text-center">
          <a href="" className="btn btn-primary guofdybtn" style={{padding:"10px 120px"}}> Despatcho</a>

          </div>


        </div>
      </div>
    </div>
    </div>
  );
}

export default GuOfTheDay