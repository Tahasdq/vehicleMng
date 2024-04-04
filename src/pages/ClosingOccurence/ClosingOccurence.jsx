import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ClosingOccurence = () => {
  const [closingOccurences, setClosingOccurences] = useState([])
  const [garrsions, setGarssions] = useState([])
  // const [closingOccurenceId , setClosingOccurenceidId]=useState()


  useEffect(() => {
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data)
        console.log("data fetche is  ", response.data)
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
        console.log("Garrson finded are", response.data)
        // Set the fetched data in state


      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
    // console.log("Garrson",Occurance_hold)
  }, [])
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

  const handleDeleteClick = (e) => {
    e.preventDefault();
    const { id } = e.target


//game barh gia ha

    axios.put(`http://localhost:3000/updataGarrisonToTrue/${id}` )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

    axios.put(`http://localhost:3000/occuranceclosed/${id}`)
      .then((response) => {
        console.log("data is ", response);
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data)
        console.log("data fetche is  ", response.data)
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });


    axios.put(`http://localhost:3000/updataGarrisonStat`, {})
      .then((response) => {
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
              console.log("inside clossing occurence", v.av_garison[0].garissonName)

              const dateTimeArrival = new Date(v.Arrivaltime);

              const formattedTimeArrival = `${dateTimeArrival.getHours().toString().padStart(2, '0')}:${dateTimeArrival.getMinutes().toString().padStart(2, '0')}`;

              const dateTimeDispatch = new Date(v.Time);

              const formattedTimeDispatch = `${dateTimeDispatch.getHours().toString().padStart(2, '0')}:${dateTimeDispatch.getMinutes().toString().padStart(2, '0')}`;

              const Diiference_Total_Millisencond = (dateTimeArrival - dateTimeDispatch) / 1000


              var hours = Math.floor(Diiference_Total_Millisencond / 3600);
              var remainingSeconds = Diiference_Total_Millisencond % 3600;
              var minutes = Math.floor(remainingSeconds / 60);
              var TimeDifference = hours + ":" + minutes



              return (
                <div className="col-md-12 col-sm-12 my-3 occurancea_holds row">
                  <div className="col-md-10 row">

                    <div className="col-md-3 col-sm-12">
                      <h6>Telefone : {v.phone} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Solicitante : {v.Applicant} </h6>
                    </div>

                    {/* <div className="col-md-3  col-sm-12">
                    <h6>Garnição deixando a cena: {v.Gu_leaving_the_scence} </h6>
                  </div> */}
                    <div className="col-md-3 col-sm-12">
                      <h6>Rua : {v.Street} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>tempo de chegada : {formattedTimeArrival} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Garnição deixando a cena: {formattedTimeDispatch} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Tempo total gasto: {TimeDifference} </h6>
                    </div>

                    <span className="col-md-6 col-sm-12 gu_list">
                      <h6> Gu Lista : </h6>
                      


                      <div class="card">
                        <div class="card-body">
                          {v.av_garison.map((item) => {


const dateTimeArrival = new Date(item.ArrivalTime);

const formattedTimeArrival = `${dateTimeArrival.getHours().toString().padStart(2, '0')}:${dateTimeArrival.getMinutes().toString().padStart(2, '0')}`;

const dateTimeDispatch = new Date(item.DispachTime);

const formattedTimeDispatch = `${dateTimeDispatch.getHours().toString().padStart(2, '0')}:${dateTimeDispatch.getMinutes().toString().padStart(2, '0')}`;

const Diiference_Total_Millisencond = (dateTimeArrival - dateTimeDispatch) / 1000


let hours = Math.floor(Diiference_Total_Millisencond / 3600);
let remainingSeconds = Diiference_Total_Millisencond % 3600;
let minutes = Math.floor(remainingSeconds / 60);
let TimeDifference = hours + ":" + minutes







                            return(
                            <div class="card">
                              <div class="card-body">
                                <span>Garison Name:  {item.garissonName}</span>
                                <br />
                                <span>Dispatch time: {formattedTimeDispatch}</span>
                                <br />
                                <span>ArrivalTime: {formattedTimeArrival}</span>
                                <br />
                                <span>TimeDifference: {TimeDifference}</span>
                                <br />
                              </div>
                            </div>)}
                            
                          )}
                        </div>
                      </div>





                    </span>



                  </div>
                  <div className="col-md-2 deltbtn">

                    <a href="#" av_garison={v.av_garison} onClick={handleDeleteClick} id={v._id} className='btn btn-danger' style={{ padding: "50px 60px" }}>
                      <i onClick={(e) => e.currentTarget.parentNode.click()} className="fa-solid fa-trash" style={{ fontSize: "25px" }}></i>
                    </a>
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