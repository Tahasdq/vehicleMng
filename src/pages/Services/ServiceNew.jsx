import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceNew = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [data, setData] = useState(0);
  const [countOcc, setcountOcc] = useState(0);
  const [hold, setHold] = useState(1);
  const [Garrison, setNewGarrison] = useState([]);
  const [GarrisonId, setGarrsionId] = useState(null);
  const [GarrisonIdFalse, setGarrsionIdFalse] = useState([]);




  const [post, setPost] = useState({
    phone: "",
    Applicant: "",
    Street: "",
    Neighbourhood: "",
    City: "",
    Reference: "",
    Description: "",
    Request: "",
    av_garison: "",
    occurance_Number: 0,
    occurance_Code: 0,
    Status: "0",
    Time:"",
    ArrivalTime:"",
    // Garisson: null
  });






  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:3000/getoccurance")
      .then((response) => {
        // Set the fetched data in state
        setData(response.data);
        console.log(response.data.Code);
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://localhost:3000/getnewoccurance")
      .then((response) => {
        // Set the fetched data in state
        setcountOcc(response.data);
        console.log("Code", response.occurance_Code);
        console.log("Number", response.occurance_Number);
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://localhost:3000/getGarrison")
      .then((response) => {
        setNewGarrison(response.data)
        console.log("Garrson", response.data)
        // Set the fetched data in state


      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });


    axios
      .get("http://localhost:3000/getGarrisonFalse")
      .then((response) => {
        setGarrsionIdFalse(response.data)
        console.log("GarrsonFalse", response.data)
        // Set the fetched data in state


      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });






  }, []);

  const handleInput = (event) => {
    const { id, checked ,name } = event.target;

    if (id === "vehicle3" && checked) {
      // Disable Garrison radio buttons
      setNewGarrison(Garrison.map(item => ({ ...item, disabled: true })));
    } else if (name === "av_garison") {
      // If a Garrison radio button is checked
      // Enable all Garrison radio buttons
      setNewGarrison(Garrison.map(item => ({ ...item, disabled: false })));
    }
    setGarrsionId(id)
    // console.log("garrisonId", id)
    setPost({ ...post, [event.target.name]: event.target.value });


  };

  console.log([post])
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));




    // axios.put(`http://localhost:3000/updataGarrison/${GarrisonId}`)
    //   .then((response)=>{
    //       console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching vehicle data:', error);
    //   });


  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const responsePost = await axios.post("http://localhost:3000/newOccurance", post);
      console.log(responsePost);
  
      // Assuming the response contains the updated post object
      console.log("Code", post.occurance_Code);
      console.log("Number", post.occurance_Number);
  
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 1000);
      setPost({
        phone: "",
        Applicant: "",
        Street: "",
        Neighbourhood: "",
        City: "",
        Reference: "",
        Description: "",
        Request: "",
        av_garison: null,
        occurance_Number: "", // Clearing the fields
        occurance_Code: "",
      });
  
      const responsePut = await axios.put(`http://localhost:3000/updataGarrison/${GarrisonId}`);
      console.log(responsePut);
  
      const responseGetGarrison = await axios.get("http://localhost:3000/getGarrison");
      setNewGarrison(responseGetGarrison.data);
      console.log("Garrison", responseGetGarrison.data);
  
      const responseGetGarrisonFalse = await axios.get("http://localhost:3000/getGarrisonFalse");
      setGarrsionIdFalse(responseGetGarrisonFalse.data);
      console.log("GarrisonFalse", responseGetGarrisonFalse.data);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      console.error("Error:", error);
    }
  };
  


  return (
    <div className="custom-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form form_card row my-5">
            <div class="input-group mb-3 col-md-4 col-sm-12">
              <input
                type="text"
                class="form-control"
                name="phone"
                placeholder="phone"
                value={post.phone}
                onChange={handleInput}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3 col-md-4  col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Solicitante"
                value={post.Applicant}
                onChange={handleInput}
                name="Applicant"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3 col-md-4 col-sm-12">
              <input
                type="text"
                class="form-control"
                name="Street"
                placeholder="Rua"
                value={post.Street}
                onChange={handleInput}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3 col-md-4  col-sm-12">
              <input
                type="text"
                class="form-control"
                name="Neighbourhood"
                placeholder="Bairro"
                value={post.Neighbourhood}
                onChange={handleInput}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3 col-md-4 col-sm-12">
              <input
                type="text"
                class="form-control"
                name="City"
                placeholder="Cidade"
                value={post.City}
                onChange={handleInput}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3 col-md-4 col-sm-12 ">
              <input
                type="text"
                class="form-control"
                placeholder="Referência"
                value={post.Reference}
                onChange={handleInput}
                name="Reference"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="request_card my-5">
            <div class="">
              <select
                className="btn border dropdown-toggle dropdown"
                role="button"
                name="occurance_Code"
                value={post.occurance_Code}
                onChange={handleChange}
              >
                <option value="">Cód. Atendimento</option>
                {data &&
                  data.map((v, i) => (
                    <option key={i} value={v.Code}>
                      {v.Code}
                    </option>
                  ))}
              </select>


              <select
                className="btn border dropdown-toggle dropdown"
                role="button"
                name="occurance_Number"
                value={post.occurance_Number}
                onChange={handleChange}
              >
                <option value="">Numero de Ocorrência</option>
                <option value={countOcc}>{countOcc}</option>
              </select>

            </div>
            <div class="input-group request-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                name="Request"
                placeholder="Solicitação"
                value={post.Request}
                onChange={handleInput}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="request_card py-5 my-5">
            <div class="input-group request-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Descrição"
                value={post.Description}
                onChange={handleInput}
                name="Description"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
                    
          <div  style={{fontSize:"1.5rem" , fontWeight:"700", color:"red"}}>
            <input
              type="radio"
              id="vehicle3"
              name="Status"
              value="1"
              onChange={handleInput}
              
            />
            <label for="vehicle3" className="ml-2">
              {" "}
              Em Espera
            </label>
          </div>



          <div className=" row garison my-5">
            <div className=" col-md-5 col-sm-12 avalible_garison ">
              <h3 className="text-center">Garnição Disponível</h3>
              {Garrison.map((v, i) => {
                return (
                  <div>
                    <input
                      type="radio"
                      id={v._id}
                      name="av_garison"
                      value={v.StaffName + v.VehcleName}
                      onChange={handleInput}
                      disabled={v.disabled}
                    />
                    <label for="vehicle1" className="ml-2">
                      {v.StaffName + v.VehcleName}
                    </label>
                  </div>
                )
              })}
            </div>

            <div className=" col-md-5 col-sm-12 unavalible_garison ml-5">
              <h3 className="text-center">Garnição Indisponível</h3>


              <ul>
                {GarrisonIdFalse.map((v, i) => {
                  return (
                    <>
                      <li>   {v.StaffName + v.VehcleName}</li>
                    </>

                  )
                })}
              </ul>
            </div>
          </div>


                
                <div className="d-flex justify-content-center ">


                       <input class="btn btn-primary px-5 py-2 w-50 text-center"  value="Enviar" type="submit"  />

                </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceNew;
