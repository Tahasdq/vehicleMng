import React, { useEffect , useState} from 'react'
import axios from 'axios'
 const GuOfTheDay = () => {
  

  const [Occurance_hold,SetOccurance_hold] = useState([])

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatus")
      .then((response) => {
        // Set the fetched data in state
        SetOccurance_hold(response.data);
        console.log(response)
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
  }, []);



  return (

    
    <div className="custom-container">
    <div className="container">
      <div className="Dashboard_heading">
        <h3>Ocorrência aguardando atençãon</h3>
        <hr className='my-5'/>
      </div>

      <div className="row">
      <div className="col-md-8 col-sm-12 ">
        {Occurance_hold.map((v, i) => {
         return (
            <div className="col-md-12 colsm-12 my-3 occurance_holds">
              <h4>Telefone : {v.phone} </h4>
              <h4>Candidato : {v.Applicant} </h4>
              <h4>code : {v.occurance_Code} </h4>
              <h4>Rua : {v.street} </h4>

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
          <a href="" className="btn btn-primary " style={{padding:"10px 120px"}}> Despatcho</a>

          </div>


        </div>
      </div>
    </div>
    </div>
  );
}

export default GuOfTheDay