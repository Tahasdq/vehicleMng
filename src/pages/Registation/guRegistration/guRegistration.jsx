import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './guRegistration.scss';

const GuRegistration = () => {
  const [staff, setStaff] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [garison, setGarison] = useState([]);
  const [vechicleId, setvehicleId] = useState()
  const [staffIds, setStaffIds] = useState([])
  
  

  const [post, setPost] = useState({
    StaffName: '',
    VehcleName: '',
    Status:true
  });

  useEffect(() => {
    axios.get('http://localhost:3000/getStaffStatus')
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff data:', error);
      });

    axios.get('http://localhost:3000/getVehcleStatus')
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


      axios.get('http://localhost:3000/newGarissonData')
      .then((response) => {
        setGarison(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });
      

  }, []);

  const vehicleHandleChange = (event) => {
    const { name, value ,id} = event.target;
    console.log(id)
    setvehicleId(id)
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));
  };
  // const staffHandleChange = (event) => {
  //   // const { name, value ,id} = event.target;
  //   const {id} = event.target;
  //   // setStaffId(prevIds => [...prevIds, id]);
  //   // console.log(staffId);

  //   if (!staffId.includes(id)) {
  //     // If not present, update the state array
  //     setStaffId(prevIds => [...prevIds, id]);
  // }
  // console.log(staffId)

  //   // setStaffId(...id)
  //   // setPost((prevState) => ({
  //   //   ...prevState,
  //   //   [name]: value,
      
  //   // }));
  // };

  const staffHandleChange = (event) => {

    const { id, checked,name,value } = event.target;
    
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));



    if (checked && !staffIds.includes(id)) {
        // If checkbox is checked and ID is not already in staffId, add it
        setStaffIds(prevIds => [...prevIds, id]);
        
    } else if (!checked && staffIds.includes(id)) {
        // If checkbox is unchecked and ID is in staffId, remove it
        setStaffIds(prevIds => prevIds.filter(item => item !== id));
        
    }
};

console.log(staffIds)


  const handleSubmit = (event) => {

    event.preventDefault();
    const postData = { ...post, Status: true };
    axios.post('http://localhost:3000/newGarisson', postData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Error submitting data:', err);
      });

      axios.get('http://localhost:3000/newGarissonData')
      .then((response) => {
        setGarison(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });
      

      // const IdVehcle = vechicleId 
      // console.log("ve",IdVehcle)
      
      axios.put(`http://localhost:3000/updateVehicle/${vechicleId}`)
      .then((response)=>{
          console.log(response);
          
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

      axios.put(`http://localhost:3000/updateStaff` , {dataArray: staffIds})
      .then((response)=>{
          console.log(response);
          
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });



      axios.get('http://localhost:3000/getVehcleStatus')
      .then((response) => {
        setVehicle(response.data);
        console.log(dispatch, response.data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


      axios.get('http://localhost:3000/getStaffStatus')
      .then((response) => {
        setStaff(response.data);
        console.log(dispatch, response.data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


  };

  return (
    <div className="custom-container">
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Registro da guarnição</h3>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 col-sm-12 cars my-5">
              <h3 className="text-center">Carro</h3>
              {vehicle.map((v, i) => (
                <div key={i}>
                  <input type="radio" id={v._id} name="VehcleName" value={v.Model} onChange={vehicleHandleChange}
                  // onClick={(e) =>{console.log(e.target)}}
                  />
                  <label htmlFor={`vehcle${i}`} className="ml-2">{v.Brand} {v.Model}</label>
                </div>
              ))}
            </div>

            <div className="col-md-3 col-sm-12 ml-3 guards my-5">
              <h3 className="text-center">Guarda</h3>
              {staff.map((s, i) => (
                <div key={i}>
                  <input type="checkbox" id={s._id}  name="StaffName" value={s.Name} onChange={staffHandleChange} />
                  <label htmlFor={`staff${i}`} className="ml-2">{s.Name}</label>
                </div>
              ))}
            </div>

            <div className="col-md-2 col-sm-12 ml-5 my-5">
              {/* Additional content */}
            </div>

            <div className="col-md-3 col-sm-12 guards my-5">
              <h3 className="text-center">Guarnição Disponível</h3>
              <ul>
              {garison.map((v,i)=>{
                return(
                <li>{v.StaffName}{v.VehcleName}</li>                
              
              )})}
              </ul>
            </div>

            <div>
              <button type="submit" className="btn btn-primary my-5 py-2 px-5 ml-3">Atribuir</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuRegistration;
