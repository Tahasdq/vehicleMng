import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ArrivalAtOccurence = () => {

  const [Occurance_hold, setOccurance_hold] = useState([]);
  const [findgarrison, setFindGarission] = useState([])
  const [arriveId, setarriveId] = useState([])
  const [garissonIds , setGarissonIds]=useState([])
  const[alltruegarrisionallgarison ,setalltruegarrisionallgarison ] = useState(0)
  const[allgarisonLength , setallgarisonLength]=useState(0)
  const [loading , setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZero")
      .then((response) => {
        setOccurance_hold(response.data)
        // console.log("Garrson is ", response.data)
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
    // console.log("Garrson", Occurance_hold)
    axios.get(`http://localhost:3000/getnewoccuranceocurrencesgarissonwithtruedisabled/${arriveId}`)
    .then((response)=>{
      console.log("garisson who are true",response.data.length)
      setalltruegarrisionallgarison(response.data.length)

    })
    .catch((err)=>{
    console.log(err);
    })
    .finally(()=>{
      setLoading(false)
  })


    
  }, [arriveId])

  const handleChange = (event) => {
    console.log("handle chnage triggered");
    const { value ,id,checked  } = event.target;

    // console.log(value)

    if (checked && !garissonIds.includes(id)) {
      // If checkbox is checked and ID is not already in staffId, add it
      setGarissonIds(prevIds => [...prevIds, id]);

    } else if (!checked && garissonIds.includes(id)) {
      // If checkbox is unchecked and ID is in staffId, remove it
      setGarissonIds(prevIds => prevIds.filter(item => item !== id));
    }

   

  }
  // console.log("garsion id are " , garissonIds)
  const handleInput = (e) => {
    e.preventDefault()
    // console.log(e)
    const { id } = e.target;
    setarriveId(id)

    
    //direct api call to get av_garsion from newoccrunces table
    axios
      .get(`http://localhost:3000/getnewoccuranceAllStatus/${id}`)
      .then((response) => {
        setFindGarission(response.data.av_garison)
        setallgarisonLength(response.data.av_garison.length)
        console.log("garsionlength", response.data.av_garison.length)
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

  }

  const handleStatus = (e) => {
    
    axios.put(`http://localhost:3000/occuranceDispatcharrivegarrison/${arriveId}` , {garissonIds})
    .then((response)=>{
      console.log("garisson updared",response)

    })


   

    if(alltruegarrisionallgarison === allgarisonLength){
      console.log("alltruegarrisionallgarison === allgarisonLengths");
      const token = localStorage.getItem("token")
      const InformedOfArrivalBy = jwtDecode(token).username
      axios.put(`http://localhost:3000/occuranceDispatcharrive/${arriveId}`  ,{InformedOfArrivalBy})
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

            {
              loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
              <CircularProgress size={100} />
          </Box>:
            Occurance_hold.map((v, i) => {

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



          <div className="col-md-4 col-sm-12 my-3 " style={{ textAlign: "center" }}>
            <h3>Gu. empenhadas</h3>
            <div style={{ minHeight: "100px", backgroundColor: "#fff", borderRadius: "15px", textAlign: "center" }} className=''>

              {
                loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <CircularProgress size={60} />
            </Box>:
              findgarrison.map((v, i) => {
                return (
                  <>
                    <input
                      disabled={v.disabled}
                      key={i}
                      id={v.id}
                      type="checkbox"
                      name="av_garison"
                      value={v.garissonName} // Adjust this to the correct property or index
                      onChange={handleChange}
                    />  {v.garissonName}
                    <br />
                  </>
                );
              })}
              


              {/* <h6 style={{marginTop:"10px"}}> {findgarrison[0]}</h6> */}
            </div>

            <div className="button mt-3 text-center">
              <a href="" className="btn btn-primary " onClick={(e)=>handleStatus(e)} style={{ padding: "10px 120px", marginTop:"60px" }}> Chegado</a>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
            }
export default ArrivalAtOccurence