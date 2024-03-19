import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ClosingOccurence = () => {
  const [closingOccurences , setClosingOccurences] = useState([])
  const [garrsions,setGarssions] = useState([])
  // const [closingOccurenceId , setClosingOccurenceidId]=useState()

  
  useEffect(()=>{
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data)
        console.log("data fetche is  ",response.data)
        // Set the fetched data in state
       

      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });


      axios
      .get("http://localhost:3000/getGarrisonAll")
      .then((response) => {
        setGarssions(response.data)
        console.log("Garrson finded are",response.data)
        // Set the fetched data in state
       

      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
      // console.log("Garrson",Occurance_hold)
  },[])
  // const Occurance_hold = [
  //   {
  //     phone: "123455",
  //     Applicant: "Mahad",
  //     tram: "Toyota",
  //     Gu_leaving_the_scence: "12am",
  //     Address: "abc street",
  //   },
  //   {
  //     phone: "123455",
  //     Applicant: "Mahad",
  //     tram: "Toyota",
  //     Gu_leaving_the_scence: "12am",
  //     Address: "abc street",
  //   },
  //   {
  //     phone: "123455",
  //     Applicant: "Mahad",
  //     tram: "Toyota",
  //     Gu_leaving_the_scence: "12am",
  //     Address: "abc street",
  //   },
  //   {
  //     phone: "123455",
  //     Applicant: "Mahad",
  //     tram: "Toyota",
  //     Gu_leaving_the_scence: "12am",
  //     Address: "abc street",
  //   },
  // ];

  const handleDeleteClick  =(e)=>{
    e.preventDefault();
    const {id  } = e.target
    
    
    
    axios.put(`http://localhost:3000/updataGarrisonToTrue/${id}`)
      .then((response)=>{
          console.log(response);  
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

    axios.put(`http://localhost:3000/occuranceclosed/${id}`)
    .then((response)=>{
        console.log("data is "  , response);
    })
    .catch((error) => {
      console.error('Error fetching vehicle data:', error);
    });
    

    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data)
        console.log("data fetche is  ",response.data)
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });


      axios.put(`http://localhost:3000/updataGarrisonStat` , {})
      .then((response)=>{
          console.log(response);  
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });





  }

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
            {closingOccurences.map((v, i) => {
                              const dateTime = new Date(v.Arrivaltime);

                              const formattedTime = `${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`;
              
              return (
                <div className="col-md-12 col-sm-12 my-3 occurancea_holds row">
                  <div className="col-md-10 row">
                  
                  <div className="col-md-3 col-sm-12">
                    <h6>Telefone : {v.phone} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Candidato : {v.Applicant} </h6>
                  </div>
                 
                  <div className="col-md-3  col-sm-12">
                    <h6>Garnição deixando a cena : {v.Gu_leaving_the_scence} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Bonde : {v.Street} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Rua : {v.Street} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Arrival time : {formattedTime} </h6>
                  </div>
                  
                  <div className="col-md-6 col-sm-12 gu_list">
                    <h6> Gu Lista : </h6>

                      <span>
                        
                         <strong>
                          
                          {v.av_garison}
                          </strong> 
                     
                      </span>
                 
                  </div>
                  </div>
                  <div className="col-md-2 deltbtn">
                    
                  <a href="#" av_garison= {v.av_garison} onClick={handleDeleteClick} id={v._id} className='btn btn-danger' style={{ padding: "50px 60px" }}>
                  <i onClick={(e) => e.currentTarget.parentNode.click()} className="fa-solid fa-trash" style={{ fontSize: "25px" }}></i>
                   </a>     </div>
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