import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './guRegistration.scss';

const GuRegistration = () => {
  const [staff, setStaff] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [garison, setGarison] = useState([]);
  const [vechicleId, setvehicleId] = useState()
  const [staffIds, setStaffIds] = useState([])
  const [avGarrison, setAvGarssion] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');





  const [post, setPost] = useState({
    StaffName: '',
    VehcleName: '',
    Av_garison: "",
    Status: true
  });

  useEffect(() => {
    axios.get('https://vehicle-mng.vercel.app/getStaffStatus')
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff data:', error);
      });

    axios.get('https://vehicle-mng.vercel.app/getVehcleStatus')
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


    axios.get('https://vehicle-mng.vercel.app/newGarissonData')
      .then((response) => {
        setGarison(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


  }, []);

  const vehicleHandleChange = (event) => {

    const { name, value, id } = event.target;
    console.log(id)
    setvehicleId(id)
    setSelectedVehicle(value);
    setPost((prevState) => ({
      ...prevState,
      [name]: value,

    }));

    setAvGarssion((prevState) => [...prevState, value]);


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

    const { id, checked, name, value } = event.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setAvGarssion((prevState) => [...prevState, checked ? value : '']);



    if (checked && !staffIds.includes(id)) {
      // If checkbox is checked and ID is not already in staffId, add it
      setStaffIds(prevIds => [...prevIds, id]);

    } else if (!checked && staffIds.includes(id)) {
      // If checkbox is unchecked and ID is in staffId, remove it
      setStaffIds(prevIds => prevIds.filter(item => item !== id));
    }

    setSelectedStaff(checked ? value : '');
  };

  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.isPropagationStopped());
    console.log("delete clicked")
    if (garison.length > 0) {


      axios.delete('https://vehicle-mng.vercel.app/deleteGarrisonStatus')
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error('Error submitting data:', err);
        });


      axios.put('https://vehicle-mng.vercel.app/statustrueStaff')
        .then((response) => {
          // console.log(dispatch, response.data)
        })
        .catch((error) => {
          console.error('Error fetching vehicle data:', error);
        });

      axios.put('https://vehicle-mng.vercel.app/statustrueVehcle')
        .then((response) => {
          // console.log(dispatch, response.data)
        })
        .catch((error) => {
          console.error('Error fetching vehicle data:', error);
        });


      //rendering

      axios.get('https://vehicle-mng.vercel.app/getStaffStatus')
        .then((response) => {
          setStaff(response.data);
        })
        .catch((error) => {
          console.error('Error fetching staff data:', error);
        });

      axios.get('https://vehicle-mng.vercel.app/getVehcleStatus')
        .then((response) => {
          setVehicle(response.data);
        })
        .catch((error) => {
          console.error('Error fetching vehicle data:', error);
        });


      axios.get('https://vehicle-mng.vercel.app/newGarissonData')
        .then((response) => {
          setGarison(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching vehicle data:', error);
        });




    }

  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit clicked");
    let GarisonLastelementIndex = avGarrison.length - 1
    let ToString = avGarrison[0] + avGarrison[GarisonLastelementIndex]
    console.log("avgarison is ", ToString);
    if (!selectedVehicle) {
      // alert('Please select a vehicle.');
      return;
    }

    if (!selectedStaff) {
      // alert('Please select a staff member.');
      return;
    }

    try {
      // Submit new garisson data

      const postData = { ...post, Status: true, Av_garison: ToString };
      await axios.post('https://vehicle-mng.vercel.app/newGarisson', postData);
      console.log("post api working");

      setSelectedVehicle(null);
      setSelectedStaff('');
      setStaffIds([]);

      // Clear post data after submission
      setPost({
        StaffName: '',
        VehcleName: '',
        Av_garison: '',
        Status: null
      });
      console.log("post data cleared");

      // Clear radio button selection
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach(button => {
        button.checked = false;
      });

      // Clear checkbox selection
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });

      // Update vehicle and staff data
      const updateVehicleResponse = await axios.put(`https://vehicle-mng.vercel.app/updateVehicle/${vechicleId}`);
      console.log(updateVehicleResponse);
      console.log("update vehicle api working");

      const updateStaffResponse = await axios.put('https://vehicle-mng.vercel.app/updateStaff', { dataArray: staffIds });
      console.log(updateStaffResponse);
      console.log("update staff api working");

      // Fetch updated garisson data
      // const garissonResponse = await axios.get('https://vehicle-mng.vercel.app/newGarissonData');
      // setGarison(garissonResponse.data);
      // console.log("New garission data api working");

      // Fetch updated vehicle and staff status
      const vehicleResponse = await axios.get('https://vehicle-mng.vercel.app/getVehcleStatus');
      setVehicle(vehicleResponse.data);
      console.log("getVehicle stats api working");

      const staffResponse = await axios.get('https://vehicle-mng.vercel.app/getStaffStatus');
      setStaff(staffResponse.data);
      console.log("getstaff stats api working");

      // Fetch updated garisson data again
      const updatedGarissonResponse = await axios.get('https://vehicle-mng.vercel.app/newGarissonData');
      setGarison(updatedGarissonResponse.data);
      console.log("getnewgarssiondata stats api working");

      console.log('All API calls completed successfully.');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }

    setPost({
      StaffName: '',
      VehcleName: '',
      Av_garison: '',
      Status: null
    });
  };


  const onActive = (id) => {
    console.log("Active Id", id)

    axios.put(`https://vehicle-mng.vercel.app/newGarisonActive/${id}`).then((response) => console.log(response))

    axios.get('https://vehicle-mng.vercel.app/newGarissonData').then((response) => {
      setGarison(response.data);
    })
    //  console.log("getnewgarssiondata stats api working");


  }
  const onInActive = (id) => {

    // Update vehicle and staff data
    axios.put(`https://vehicle-mng.vercel.app/newGarisonInActive/${id}`).then((response) => console.log(response))
    axios.get('https://vehicle-mng.vercel.app/newGarissonData').then((response) => {
      setGarison(response.data);
    })

  }



  //onyl for check : 






  return (
    <div className="custom-container">
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Registro da guarnição</h3>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div >
            <div className="gu-layout">
            <div className="cars my-5 div-child ">
              <h3 className="">Carro</h3>
              {vehicle.map((v, i) => (
                <div className='d-flex justify-content-start' key={i} >
                  <input type="radio" id={v._id} name="VehcleName" value={v.Model} onChange={vehicleHandleChange}
                  // onClick={(e) =>{console.log(e.target)}}
                  />
                  <label htmlFor={`vehcle${i}`} className="ml-2">{v.Brand}&nbsp; {v.Model}</label>
                </div>
              ))}
            </div>

            <div className=" pl-3 guards my-5 div-child">
              <h3 className="text-center">Guarda</h3>
              {staff.map((s, i) => (
                <div key={i}>
                  <input type="checkbox" id={s._id} name="StaffName" value={s.Name} onChange={staffHandleChange} />
                  <label htmlFor={`staff${i}`} className="ml-2">{s.Name}</label>
                </div>
              ))}
            </div>


            <div className=" guards my-5 margin-gus "
           
            
            >
              <h3 className="text-center">Guarnição Disponível</h3>
              <ul>
                {garison.length > 0 && garison.map((v, i) => {
                  return (

                    <>

                      {
                        v.Status == true ?
                          <li style={{ color: 'green' }}>
                            {/* {v.StaffName}{v.VehcleName} */}
                            {v.VehcleName + v.StaffName}
                            <button class="btn btn=primary" onClick={() => { onActive(v._id) }}><i class="fa-solid fa-circle-check"></i></button>
                            <button class="btn btn=primary" onClick={() => { onInActive(v._id) }}><i class="fa-solid fa-circle-xmark"></i></button>
                          </li>
                          :
                          <li style={{ color: 'red' }}>
                            {/* {v.StaffName}{v.VehcleName} */}
                            {v.VehcleName + v.StaffName}
                            <button class="btn btn=primary" onClick={() => { onActive(v._id) }}><i class="fa-solid fa-circle-check"></i></button>
                            <button class="btn btn=primary" onClick={() => { onInActive(v._id) }}><i class="fa-solid fa-circle-xmark"></i></button>
                          </li>
                      }
                    </>
                  )
                })}
              </ul>
            </div>

            </div>

            <div className='GuRegistration-btn'>
              <button type="submit" className="btn btn-primary my-5 py-2 px-5 ml-3">Atribuir</button>
              <button type="submit" className="btn btn-primary my-5 py-2 px-5 ml-3" onClick={(e) => handleDelete(e)}>Delete All</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuRegistration;
