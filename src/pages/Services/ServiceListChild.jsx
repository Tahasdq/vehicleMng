import React , {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const ServiceListChild = () => {
  
const [data,setData] = useState([])

  const {id} = useParams(); 

  useEffect(()=>{
    axios
    .get(`http://localhost:3000/getnewoccuranceAll/${id}`)
    .then((response) => {
      // Set the fetched data in state
      setData(response.data);
      // console.log(response.data)
      console.log(data)
    })
    .catch((error) => {
      // Handle errors, if any
      console.error("Error fetching data:", error);
    });

},[])
  
   

  return (
    <div className="container">
      <div className=" row garison my-5">
        <div className=" col-md-4 col-sm-12 Record_1">

      
          <ul>
            <li>
              <h4> phone : {data.phone}</h4>
            </li>
            <li>
              <h4> Applicant: {data.Applicant}</h4>
            </li>
            <li>
              <h4> Occurrance_Num:{data.Occurrance_Num}</h4>
            </li>
          </ul>
        </div>
        <div className=" col-md-4 col-sm-12 ml-5  Record_2">
          <ul>
            <li>
              <h4> Rua:{data.Street}</h4>
            </li>
            <li>
              <h4> Neighborhood : {data.Neighbourhood}</h4>
            </li>
            <li>
              <h4> City : {data.City}</h4>
            </li>

            <li>
              <h4> Refrence : {data.Reference}</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className=" row request_card py-5 my-5">
        <div class=" col-sm-12 col-md-12 input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Request"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={data.Request}
          />
        </div>
      </div>

      <div className=" row request_card py-5 mb-5">
        <div class=" col-sm-12 col-md-12 input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={data.Description}  
            onChange={(e)=>{e.target.value}}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceListChild;
