import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

const ArrivalAtOccurence = () => {

  const [Occurance_hold, setOccurance_hold] = useState([]);
  const [findgarrison, setFindGarission] = useState([])
  const [arriveId, setarriveId] = useState([])


  useEffect(() => {
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZero")
      .then((response) => {
        setOccurance_hold(response.data)
        console.log("Garrson is ", response.data)
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
    console.log("Garrson", Occurance_hold)
  }, [])



  const handleInput = (event) => {
    event.preventDefault();

    const { id } = event.target;
    setarriveId(id)
    // console.log("d",id)
    // setoccuranceId(id);
    // setFindGarission(id);

    axios
      .get(`http://localhost:3000/getnewoccuranceAllStatus/${id}`)
      .then((response) => {
        setFindGarission(response.data)
        console.log("Garrson", response.data)
        // Set the fetched data in state


      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

  }

  const handleStatus = () => {
    // e.preventDefault();
    const token = localStorage.getItem("token")
    const InformedOfArrivalBy = jwtDecode(token).username
    axios.put(`http://localhost:3000/occuranceDispatcharrive/${arriveId}` ,{InformedOfArrivalBy})
      .then((response) => {
        console.log("data is ", response);

      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

      //Arrival Time added

    axios.put(`http://localhost:3000/getnewoccuranceAllStatusWithZero/${arriveId}`)
      .then((response) => {
        console.log("data is ", response);

      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });



  }

  // console.log("garrison id is" , findgarrison);
  return (
    <div className='custom-container' >
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Chegada da Gu na Ocorrencia</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12  ">

            {Occurance_hold.map((v, i) => {

                const dateTime = new Date(v.Time);

                const formattedTime = `${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`;

              return (


                <div className="col-md-12 col-sm-12 my-3 occurance_holds row  d-flex  ">
                
                  


                <input type="radio" name='11' id={v._id} onChange={handleInput} /> 


                <div className="col-md-4 col-sm-12">
                    <h6 >Telefone : {v.phone} </h6>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <h6 >Solicitante : {v.Applicant} </h6>
                  </div>
                
                  <div className="col-md-4 col-sm-12 ml-md-3 ">
                    <h6 >Bonde : {v.Street} </h6>

                  </div>
                  <div className="col-md-4 col-sm-12">
                    <h6>Rua : {v.Street} </h6>

                  </div>
                  <div className="col-md-4 col-sm-12 ml-md-3 ">
                    <h6>Cód. Atendimento : {v.occurance_Code} </h6>

                  </div>
                  {/* <div className="col-md-6 col-sm-12">
                    <h6> Garnição deixando a cena: {v.Neighbourhood} </h6>
                  </div> */}
                  <div className="col-md-6 col-sm-12">
                    <h6> Garnição deixando a cena: 
                      {formattedTime}                       
                      </h6>
                  </div>
                </div>
              );
            })}
          </div>



          <div className="col-md-4 col-sm-12 my-3 " style={{textAlign:"center"}}>
            <h3>Gu. empenhadas</h3>
            <div style={{height:"50px" , backgroundColor:"#fff" , borderRadius:"15px" , textAlign:"center" }} className=''>
              
              <h6 style={{marginTop:"10px"}}> {findgarrison}</h6>
            </div>

            <div className="button mt-3 text-center">
              <a href="" className="btn btn-primary " onClick={handleStatus} style={{ padding: "10px 120px" }}> Chegado</a>

            </div>


          </div>
        </div>
      </div>


    </div>
  )
}

export default ArrivalAtOccurence