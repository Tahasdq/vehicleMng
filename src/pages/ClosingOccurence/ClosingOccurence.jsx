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
import {
  TextField,
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from '@mui/icons-material/Delete';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClosingOccurence = () => {
  const [closingOccurences, setClosingOccurences] = useState([]);
  const [garrsions, setGarssions] = useState([]);
  const [Name, setName] = useState("");
  const [applicants, setApplicants] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [age, setAge] = React.useState("");
  const [description, setDescription] = useState("");
  const [formFields, setFormFields] = useState([{ id: 1, value: "" }]);

  // Function to handle adding new form fields

  // Function to handle changing the value of a form field
  const handleFieldChange = (id, value) => {
    const updatedFields = formFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFormFields(updatedFields);
  };

  // Function to handle removing a form field
  const handleRemoveField = (id) => {
    if (id === 1) {
      console.log("Cannot delete primary field.");
      return;
    }
  
    const updatedFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFields);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
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
      .get("http://localhost:3000/getGarrisonAll")
      .then((response) => {
        setGarssions(response.data);
        // console.log("Garrson finded are", response.data);
        // Set the fetched data in state
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

    axios.get("http://localhost:3000/getApplicants").then((response) => {
      setApplicants(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    console.log("handle delete called");

    // axios
    //   .put(`http://localhost:3000/updataGarrisonToTrue/${id}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching vehicle data:", error);
    //   });

    // const token = localStorage.getItem("token");
    // const ClosedBy = jwtDecode(token).username;

    // axios
    //   .put(`http://localhost:3000/occuranceclosed/${id}`, { ClosedBy })
    //   .then((response) => {
    //     console.log("data is ", response);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching vehicle data:", error);
    //   });

    // axios
    //   .get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
    //   .then((response) => {
    //     setClosingOccurences(response.data);
    //     console.log("data fetche is  ", response.data);
    //     // Set the fetched data in state
    //   })
    //   .catch((error) => {
    //     // Handle errors, if any
    //     console.error("Error fetching data:", error);
    //   });

    // axios
    //   .put(`http://localhost:3000/updataGarrisonStat`, {})
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching vehicle data:", error);
    //   });
  };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedValue(value || ""); // Set selectedValue to the provided value or empty string if not provided
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(""); // Reset selectedValue on dialog close
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Function to handle adding new form fields
  const handleAddField = () => {
    const newId = formFields.length + 1;
    const newField = { id: newId, name: "", cpf: "", person: "" };
    setFormFields([...formFields, newField]);
  };

  return (
    <div className="custom-container">
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Ocorrências atendidas</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {closingOccurences.map((v, i) => {
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

              function counting(num) {
                return String(num)
                  .split("")
                  .reduce((count, digit) => count + 1, 0);
              }
              let number = v.occurance_Number;
              let occurence_code_length = counting(number);

              let occurence_code_to_display;
              if (occurence_code_length == 1) {
                occurence_code_to_display = "000" + number;
              } else if (occurence_code_length == 2)
                occurence_code_to_display = "00" + number;
              else if (occurence_code_length == 3)
                occurence_code_to_display = "0" + number;
              else {
                occurence_code_to_display = number;
              }

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
                      <h6>
                        Garnição deixando a cena: {formattedTimeDispatch}{" "}
                      </h6>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h6>Tempo total gasto: {TimeDifference} </h6>
                    </div>

                    <span className="col-md-6 col-sm-12 gu_list">
                      <h6> Gu Lista : </h6>

                      <strong>{v.av_garison}</strong>
                    </span>
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
                      {`Occurence closure  data number is : ${occurence_code_to_display}`}
                    </DialogTitle>
                    <DialogContent>
                      {/* {formFields.map((field) => (
                      <div key={field.id}>
                      <Box
                      display="flex"
                      >

                      
                      <Autocomplete
                        disablePortal
                        
                        id={`name-${field.id}`}
                        options={applicants.map((item) => item.Name)}
                        value={nameInput}
                        onChange={(event, newValue) => {
                          setNameInput(newValue || "");
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            label="Select Name"
                            // onSelect={handleInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            value={nameInput}
                            sx={{
                              width: 200,
                              margin: "10px auto",
                            }}
                          />
                        )}
                      />
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={applicants.map((item) => item.CPF)}
                        value={cpfInput}
                        onChange={(event, newValue) => {
                          setCpfInput(newValue || "");
                        }}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label="Select CPF"
                            // onSelect={handleInput}
                            onChange={(e) => setCpfInput(e.target.value)}
                            value={cpfInput}
                            sx={{
                              width: 200,
                              margin: "10px auto",
                            }}
                          />
                        )}
                      />
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={closingOccurences.map((item) => item.phone)}
                        value={phoneInput}
                        onChange={(event, newValue) => {
                          setPhoneInput(newValue || "");
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            label="Select Telephone"
                            // onSelect={handleInput}
                            onChange={(e) => setPhoneInput(e.target.value)}
                            value={phoneInput}
                            sx={{
                              width: 300,
                              margin: "10px auto",
                            }}
                          />
                        )}
                      />
                      <Box sx={{ minWidth: 100 ,width: 200 ,marginTop:1}}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Person
                          </InputLabel>
                          <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={`Victim`}>Victim</MenuItem>
                            <MenuItem value={`Author`}>Author</MenuItem>
                            <MenuItem value={`Witness`}>Witenss</MenuItem>
                            <MenuItem value={`Other`}>Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{margin:2 , marginLeft:2 ,paddingLeft:2 }}>
                            
                        <SaveIcon sx={{cursor:"pointer" , marginLeft:2}}/>
                        <PersonAddIcon  sx={{cursor:"pointer" ,marginLeft:2}}/>
                      </Box>
                          </Box>
                      </div>
                      ))} */}

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
              label="Select Name"
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
        <Box sx={{ minWidth: 100, width: 200, marginTop: 1 }}>
          <FormControl fullWidth>
            <InputLabel id={`person-label-${field.id}`}>Person</InputLabel>
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
          <SaveIcon sx={{ cursor: "pointer", marginLeft: 2 }} />
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
                            label="Address"
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
                            label="Description of the fact"
                            value={description}
                            onChange={(ev) => setDescription(ev.target.value)}
                          />
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button
                        av_garison={v.av_garison}
                        id={v._id}
                        onClick={handleDeleteClick}
                      >
                        Agree
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
                        className="fa-solid fa-trash"
                        style={{ fontSize: "25px" }}
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
