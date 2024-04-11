import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { jwtDecode } from 'jwt-decode'



const ServiceNew = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [data, setData] = useState(0);
  const [countOcc, setcountOcc] = useState(0);
  const [Garrison, setNewGarrison] = useState([]);
  const [GarrisonId, setGarrsionId] = useState('');
  const [GarrisonValue, setGarrsionValue] = useState([]);
  const [GarrisonIdFalse, setGarrsionIdFalse] = useState([]);
  const [StaffIds, setStaffIds] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState({}); // State to keep track of checked checkboxes


  function getformValues(){
    const storedValue =localStorage.getItem("data");    
    if(!storedValue) return{
      phone: "",
      Applicant: "",
      Street: "",
      Neighbourhood: "",
      City: "",
      Reference: "",
      Description: "",
      Request: "",
      av_garison: [],
      occurance_Number: 0,
      occurance_Code: 0,
      Time:"",
      ArrivalTime:"",
      MadeBy:"",
    }
    return JSON.parse(storedValue)
  }


const [post, setPost] = useState(getformValues);

useEffect(()=>{
  localStorage.setItem("data" , JSON.stringify(post))
},[post])


// Function to save checkbox state to local storage
const saveCheckedBoxesToLocalStorage = (checkedBoxes) => {
  localStorage.setItem("checkedBoxes", JSON.stringify(checkedBoxes));
};

// Function to load checkbox state from local storage
const loadCheckedBoxesFromLocalStorage = () => {
  const storedCheckedBoxes = JSON.parse(localStorage.getItem("checkedBoxes"));
  if (storedCheckedBoxes) {
    setCheckedBoxes(storedCheckedBoxes);
  }
};

useEffect(() => {
  loadCheckedBoxesFromLocalStorage(); // Load checkbox state from local storage on component mount
}, []);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("https://vehicle-mng.vercel.app/getoccurance")
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
      .get("https://vehicle-mng.vercel.app/getnewoccurance")
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
      .get("https://vehicle-mng.vercel.app/getGarrison")
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
      .get("https://vehicle-mng.vercel.app/getGarrisonFalse")
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

    
    const { id, checked, name, value ,type } = event.target;

    // Update GarrisonId based on the checked checkbox

    if (checked && !StaffIds.includes(id)) {
      // If checkbox is checked and ID is not already in staffId, add it
      setStaffIds(prevIds => [...prevIds, id]);

    } else if (!checked && StaffIds.includes(id)) {
      // If checkbox is unchecked and ID is in staffId, remove it
      setStaffIds(prevIds => prevIds.filter(item => item !== id));
    }
    if (type==="checkbox") {
      
      setCheckedBoxes({ ...checkedBoxes, [id]: checked }); // Update checkbox state
      saveCheckedBoxesToLocalStorage({ ...checkedBoxes, [id]: checked }); // Save checkbox state to local storage
    }

    if (checked) {
      setGarrsionId(id);
    } else if (id === GarrisonId) {
      setGarrsionId(''); // Unset GarrisonId if the checkbox is unchecked
    }
    if(checked && name==="Status") localStorage.removeItem("checkedBoxes")

    
    if (checked && name !=="Status") {
        console.log("fisrt call ");
      let obj={ 
        id: uuidv4(),
        "garissonName":value,
        garissonId:id,
        DispachTime:new Date(),
        ArrivalTime:"Notarrived",
        disabled:false
      }
      setGarrsionValue((prevValues) => [...prevValues, obj]);
      // setGarrsionValue((prevValues) => [...prevValues, value]);
    } else {
      console.log("second call ");
      setGarrsionValue((prevValues) => prevValues.filter((item) => item.garissonName !== value));
    }

    
    
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      av_garison: checked && name !== "Status" ? [...GarrisonValue, { id: uuidv4(), garissonName: value, DispachTime: new Date(), ArrivalTime: "Notarrived",garissonId:id, disabled: false }] : (name === "Status" && checked ? [] : GarrisonValue.filter((item) => item.garissonName !== value)),
      Status: checked && name !== "Status" ? "0" : "1",

    }));
    
   





    if (id === "vehicle3" && checked) {
      // Disable Garrison radio buttons
      setNewGarrison(Garrison.map(item => ({ ...item, disabled: true })));
    } else if (name === "av_garison") {
      // If a Garrison radio button is checked
      // Enable all Garrison radio buttons
      setNewGarrison(Garrison.map(item => ({ ...item, disabled: false })));
    }
    console.log("garisson consolled ", Garrison)


  };


  console.log("valueGarisoin is " , GarrisonValue)
  console.log("post value is " , post  )

  console.log([post])



  const handleChange = (event) => {
    const { name, value } = event.target;
    

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  const saved = localStorage.getItem("data");
  
  const initialValue = JSON.parse(saved);
  console.log(initialValue);
  return initialValue || "";


    // axios.put(`https://vehicle-mng.vercel.app/updataGarrison/${GarrisonId}`)
    //   .then((response)=>{
    //       console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching vehicle data:', error);
    //   });


  };

  


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !post.phone ||
      !post.Applicant ||
      !post.Street ||
      !post.Neighbourhood ||
      !post.City ||
      !post.Reference ||
      !post.occurance_Code ||
      !post.occurance_Number ||
      !post.Request ||
      !post.Description
    ) {
      // If any required field is missing, set submit status to error
      alert("please fill all the feilds")
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return;
    }




    try {
      const token = localStorage.getItem("token")
       const MadeBy = jwtDecode(token).username

      const responsePost = await axios.post("https://vehicle-mng.vercel.app/newOccurance", {...post , MadeBy });
      console.log(responsePost);

      if (StaffIds.length!==0) {
        console.log("Callled");
      const updateStaffResponse = await axios.put('https://vehicle-mng.vercel.app/updateGarrisoninServiceNew', { dataArray: StaffIds });
      console.log("update staff api working", updateStaffResponse);
      console.log("update staff api working");

      // Assuming the response contains the updated post object
      console.log("Code", post.occurance_Code);
      console.log("Number", post.occurance_Number);
      setGarrsionValue([]);
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
        av_garison: [null],
        occurance_Number: "", // Clearing the fields
        occurance_Code: "",
      });
      localStorage.removeItem("checkedBoxes")
    }
    

      // const responsePut = await axios.put(`https://vehicle-mng.vercel.app/updataGarrison/${GarrisonId}`);
      // console.log(responsePut);

      const responseGetGarrison = await axios.get("https://vehicle-mng.vercel.app/getGarrison");
      setNewGarrison(responseGetGarrison.data);
      console.log("Garrison", responseGetGarrison.data);

      const responseGetGarrisonFalse = await axios.get("https://vehicle-mng.vercel.app/getGarrisonFalse");
      setGarrsionIdFalse(responseGetGarrisonFalse.data);
      console.log("GarrisonFalse", responseGetGarrisonFalse.data);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      console.error("Error:", error);
    }

    setGarrsionValue([]);
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
        av_garison: [null],
        occurance_Number: "", // Clearing the fields
        occurance_Code: "",
      });
  };



  return (
    <>
    {submitStatus === 'success' && (
      <div className="alert alert-success" style={{ width: '20%' }} role="alert">
        Submitted successfully
      </div>
    )}
    {submitStatus === 'error' && (
      <div className="alert alert-danger" style={{ width: '20%' }} role="alert">
        An error occurred
      </div>
    )}
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
                placeholder="Observaçã"
                value={post.Description}
                onChange={handleInput}
                name="Description"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "red" }}>
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
                      type="checkbox"
                      id={v._id}
                      name="av_garison"
                      // value={v.VehcleName + v.StaffName} //changes
                      value={v.Av_garison}
                      onChange={handleInput}
                    disabled={v.disabled}
                    checked={checkedBoxes[v._id]}
                    />
                    <label for="vehicle1" className="ml-2">
                    { v.VehcleName + v.StaffName }
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


            <input class="btn btn-primary px-5 py-2 w-50 text-center" value="Enviar" type="submit" />

          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ServiceNew;
