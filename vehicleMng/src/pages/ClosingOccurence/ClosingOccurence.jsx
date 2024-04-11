import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CircularProgress from '@mui/material/CircularProgress';
import {
  TextField,
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from '@mui/icons-material/Delete';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClosingOccurence = () => {
  const [loading , setLoading] = useState(false)
  const [closingOccurences, setClosingOccurences] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [street , setStreet] = useState([])
  const [description, setDescription] = useState("");
  const [formFields, setFormFields] = useState([{ id: 1, name: "", cpf: "", phone: "", street:"" ,Neighborhood :"",City:"" ,  person: ""  }]);


  const handleFieldChange = (id, key, value) => {
    const updatedFields = formFields.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setFormFields(updatedFields);

  };


  // Function to handle removing a form field
  const handleRemoveField = (id) => {
    if (id === 1) {
      console.log("Cannot delete primary field.");
      return;

      const updatedFields = formFields.filter((field) => field.id !== id);
      setFormFields(updatedFields);
    }

    const updatedFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFields);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://vehicle-mng.vercel.app/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data);
        console.log("data fetche is from newOcccurences  ", response.data);
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios
      .get("https://vehicle-mng.vercel.app/getGarrisonAll")
      .then((response) => {
        setGarssions(response.data);
        // console.log("Garrson finded are", response.data);
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios.get("https://vehicle-mng.vercel.app/getApplicants").then((response) => {
      setApplicants(response.data);
      console.log(response.data);
    });

    axios.get("https://vehicle-mng.vercel.app/getStreet").then((response) => {
      setStreet(response.data);
      console.log(response.data);
    })
    .finally(()=>{
      setLoading(false)
    })


  }, []);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    // Basic form validation
    const isValid = formFields.every(field => 
      field.name && field.cpf && field.phone && field.street && field.Neighborhood && field.City && field.person
    );

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }
    const { id, value } = e.target;
    let IdOfOccurence = id
    // console.log("handle delete called");


    axios.post("https://vehicle-mng.vercel.app/createreport", { IdOfOccurence, formFields, description })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })

    axios
      .put(`https://vehicle-mng.vercel.app/updataGarrisonToTrue/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });

    const token = localStorage.getItem("token");
    const ClosedBy = jwtDecode(token).username;

    axios.put(`https://vehicle-mng.vercel.app/occuranceclosed/${id}`, { ClosedBy })
      .then((response) => {
        console.log("data is ", response);
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });


    axios
      .get("https://vehicle-mng.vercel.app/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data);
        console.log("data fetche is  ", response.data);
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios
      .put(`https://vehicle-mng.vercel.app/updataGarrisonStat`, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });
    setFormFields([{ id: 1, name: "", cpf: "", phone: "", street:"" ,Neighborhood :"",City:"" , person: "" }]);
    axios
      .get("https://vehicle-mng.vercel.app/getnewoccuranceAllStatusWithZeroAndTwo")
      .then((response) => {
        setClosingOccurences(response.data);
        console.log("data fetche is  ", response.data);
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });
    handleClose();

  };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedValue(value || "");
    setFormFields([{  id: 1, name: "", cpf: "", phone: "", street:"" ,Neighborhood :"",City:"" ,  person: ""  }]);

    // Set selectedValue to the provided value or empty string if not provided
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(""); // Reset selectedValue on dialog close
    setFormFields([{  id: 1, name: "", cpf: "", phone: "", street:"" ,Neighborhood :"",City:"" ,  person: ""  }]);
    
  };


  // Function to handle adding new form fields
  const handleAddField = () => {
    const newId = formFields.length + 1;
    const newField = { id: newId, name: "", cpf: "", phone: "", street:"" ,Neighborhood :"",City:"" , person: "" };
    setFormFields([...formFields, newField]);
  };
  console.log("formfeild are ", formFields);

  return (
    <div className="custom-container">
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Ocorrências atendidas</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {
            loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <CircularProgress size={100} />
        </Box>:
            closingOccurences.map((v, i) => {
              console.log("inside clossing occurence", v.av_garison[0].garissonName)

              const dateTimeArrival = new Date(v.Arrivaltime);

              const formattedTimeArrival = `${dateTimeArrival
                .getHours()
                .toString()
                .padStart(2, "0")}:${dateTimeArrival
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`;

              const dateTimeDispatch = new Date(v.Time);

              const formattedTimeDispatch = `${dateTimeDispatch
                .getHours()
                .toString()
                .padStart(2, "0")}:${dateTimeDispatch
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`;

              const Diiference_Total_Millisencond =
                (dateTimeArrival - dateTimeDispatch) / 1000;

              var hours = Math.floor(Diiference_Total_Millisencond / 3600);
              var remainingSeconds = Diiference_Total_Millisencond % 3600;
              var minutes = Math.floor(remainingSeconds / 60);
              var TimeDifference = hours + ":" + minutes;


              //occurence number formating
              let occurence_code_to_display = v.occurance_Number.toString().padStart(4, '0');




              return (

                <div className="col-md-12 col-sm-12 my-3 occurancea_holds row">
                  <div className="col-md-10 row">
                    <div className="col-md-3 col-sm-12">
                      <h6>Telefone : {v.phone}</h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Solicitante : {v.Applicant} </h6>
                    </div>

                    <div className="col-md-3 col-sm-12">
                      <h6>Rua : {v.Street} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>tempo de chegada : {formattedTimeArrival} </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>
                        Garnição deixando a cena: {formattedTimeDispatch}{" "}
                      </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Tempo total gasto: {TimeDifference} </h6>
                    </div>

                    <div className="col-md-6 col-sm-12 gu_list">
                      <br />
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


                            return (
                              <div class="card">
                                <div class="card-body">
                                  <span>Guarnição:  {item.garissonName}</span>
                                  <br />
                                  <span>Hora saida: {formattedTimeDispatch}</span>
                                  <br />
                                  <span>Hora chegada: {formattedTimeArrival}</span>
                                  <br />
                                  <span>Hora empenhada: {TimeDifference}</span>
                                  <br />
                                </div>
                              </div>)
                          }

                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  <Dialog
                    open={open}
                    fullWidth="true"
                    maxWidth="xl"
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      {`Encerramento da ocorrênca numero : ${occurence_code_to_display}`}
                    </DialogTitle>
                    <DialogContent>
                    

                      {formFields.map((field) => (
                        <div key={field.id}>
                          <Box display="flex">
                            <Autocomplete
                              disablePortal
                              id={`name-${field.id}`}
                              options={applicants.map((item) => item.Name)}
                              value={field.name}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "name", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  required
                                  label="Select Nome"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "name", e.target.value)
                                  }
                                  value={field.name}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />
                            <Autocomplete
                              disablePortal
                              id={`cpf-${field.id}`}
                              options={applicants.map((item) => item.CPF)}
                              value={field.cpf}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "cpf", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Select CPF"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "cpf", e.target.value)
                                  }
                                  value={field.cpf}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />
                            <Autocomplete
                              disablePortal
                              id={`phone-${field.id}`}
                              options={closingOccurences.map((item) => item.phone)}
                              value={field.phone}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "phone", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Select telefone"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "phone", e.target.value)
                                  }
                                  value={field.phone}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />
                            {/* Street data */}
                            <Autocomplete
                              disablePortal
                              id={`street-${field.id}`}
                              options={street.map((item) => item.Stret)}
                              value={field.street}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "street", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Select Rua"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "street", e.target.value)
                                  }
                                  value={field.street}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />
                            <Autocomplete
                              disablePortal
                              id={`Neighborhood-${field.id}`}
                              options={street.map((item) => item.Neigbourhood)}
                              value={field.Neighborhood}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "Neighborhood", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Select Bairro"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "Neighborhood", e.target.value)
                                  }
                                  value={field.Neighborhood}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />

                            <Autocomplete
                              disablePortal
                              id={`City-${field.id}`}
                              options={street.map((item) => item.City)}
                              value={field.City}
                              onChange={(event, newValue) =>
                                handleFieldChange(field.id, "City", newValue || "")
                              }
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Select Cidade"
                                  onChange={(e) =>
                                    handleFieldChange(field.id, "City", e.target.value)
                                  }
                                  value={field.City}
                                  sx={{
                                    width: 200,
                                    margin: "10px auto",
                                  }}
                                />
                              )}
                            />

                            <Box sx={{ minWidth: 100, width: 200, marginTop: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id={`person-label-${field.id}`}>Pessoa</InputLabel>
                                <Select
                                  required
                                  labelId={`person-label-${field.id}`}
                                  id={`person-${field.id}`}
                                  value={field.person}
                                  onChange={(event) =>
                                    handleFieldChange(field.id, "person", event.target.value)
                                  }
                                >
                                  <MenuItem value={`Victim`}>Victim</MenuItem>
                                  <MenuItem value={`Author`}>Author</MenuItem>
                                  <MenuItem value={`Witness`}>Witenss</MenuItem>
                                  <MenuItem value={`Other`}>Other</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            <Box sx={{ margin: 2, marginLeft: 2, paddingLeft: 2 }}>
                              <PersonAddIcon
                                sx={{ cursor: "pointer", marginLeft: 2 }}
                                onClick={() => handleAddField()}
                              />
                              <DeleteIcon
                                sx={{ cursor: "pointer", marginLeft: 2 }}
                                onClick={() => handleRemoveField(field.id)}
                              />
                            </Box>
                          </Box>
                        </div>
                      ))}

                      <Box sx={{ minWidth: 150, marginTop: 2 }}>
                        <FormControl fullWidth>
                          {/* <InputLabel id="demo-simple-select-label">
                            Address
                          </InputLabel> */}
                          <TextField
                            id="outlined-read-only-input"
                            label="local da ocorrencia"
                            InputProps={{
                              readOnly: true,
                            }}
                            defaultValue={
                              v.Street + " " + v.Neighbourhood + " " + v.City
                            }
                          />
                        </FormControl>
                      </Box>

                      <Box sx={{ minWidth: 150, marginTop: 2 }}>
                        <FormControl fullWidth>
                          <TextField
                            id="outlined"
                            label="descrição do factos"
                            value={description}
                            onChange={(ev) => setDescription(ev.target.value)}
                          />
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Discordo</Button>
                      <Button
                        av_garison={v.av_garison}
                        value={v.Street + " " + v.Neighbourhood + " " + v.City}
                        id={v._id}
                        onClick={handleDeleteClick}
                      >
                        Concordo
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <div className="col-md-2 deltbtn">
                    <a
                      href="#"
                      onClick={handleClickOpen}
                      className="btn btn-danger"
                      style={{ padding: "50px 60px" }}
                    >
                      <i
                        onClick={(e) => e.currentTarget.parentNode.click()}
                        className="fa-2xl fa-solid fa-minus "
                        // style={{ fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingOccurence;
