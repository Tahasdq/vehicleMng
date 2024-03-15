import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceNew = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [data, setData] = useState(0);
  const [countOcc, setcountOcc] = useState(0);
  const [hold, setHold] = useState(1);


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
    status: ''
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
  }, []);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:3000/newOccurance", post)
  //     .then((response) => {
  //       console.log(response.occurance_Code)
  //       console.log(response.occurance_Number)

  //       setSubmitStatus("success");
  //       setTimeout(() => {
  //         setSubmitStatus(null);
  //       }, 1000);
  //       setPost({
  //         phone: "",
  //         Applicant: "",
  //         Street: "",
  //         Neighbourhood: "",
  //         City: "",
  //         Reference: "",
  //         Description: "",
  //         Request: "",
  //         av_garison: "",
  //         occurance_Number:"",
  //         occurance_Code:""
  //       }); // Clearing the fields
  //       console.log(response);


  //     })
  //     .catch((err) => {
  //       setSubmitStatus("error");
  //       setTimeout(() => {
  //         setSubmitStatus(null);
  //       }, 3000);
  //       console.log(err);
  //     });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/newOccurance", post)
      .then((response) => {
        console.log(response); // Check the entire response object to see what data it contains

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
          av_garison: "",
          occurance_Number: "", // Clearing the fields
          occurance_Code: "",
        });
      })
      .catch((err) => {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
        console.log(err);
      });
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
                placeholder="Candidato"
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
                <option value="">Código de Ocorrência</option>
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

          <div className=" row garison my-5">
            <div className=" col-md-5 col-sm-12 avalible_garison ">
              <h3 className="text-center">Garnição Disponível</h3>
              <div>
                <input
                  type="radio"
                  id="vehicle1"
                  name="av_garison"
                  value="Bike"
                  onChange={handleInput}
                />
                <label for="vehicle1" className="ml-2">
                  {" "}
                  I have a bike
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="vehicle2"
                  name="av_garison"
                  value="Car"
                  onChange={handleInput}
                />
                <label for="vehicle2" className="ml-2">
                  {" "}
                  I have a car
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="vehicle3"
                  name="av_garison"
                  value="Boat"
                  onChange={handleInput}
                />
                <label for="vehicle3" className="ml-2">
                  {" "}
                  I have a boat
                </label>
              </div>
            </div>

            <div className=" col-md-5 col-sm-12 unavalible_garison ml-5">
              <h3 className="text-center">Garnição Indisponível</h3>

              <ul>
                <li>WOrk</li>
                <li>WOrk</li>
                <li>WOrk</li>
              </ul>
            </div>
          </div>


          <div>
            <input
              type="checkbox"
              id="vehicle3"
              name="Status"
              value="1"
              onChange={handleInput}
            />
            <label for="vehicle3" className="ml-2">
              {" "}
              onHold
            </label>
          </div>

          <input class="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ServiceNew;
