import React, { useState } from "react";
import axios from "axios";
import "../StylingFile/Style.scss";

const VehicleRegistration = () => {
  const [post, setPost] = useState({
    VehicleNumber: "",
    Plate: "",
    Brand: "",
    Model: "",
    Status:true
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/postVehicle", post) // Corrected endpoint URL
      .then((response) => {
        console.log(response);
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
        setPost({ VehicleNumber: "", Plate: "", Brand: "", Model: "" }); // Clearing the fields
      })
      .catch((err) => {
        console.log(err);
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
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
      <section id="form">
        <div className="form-wrapper">
          <div className="form-heading">
            <h2>Registro de Veículo</h2>
          </div>
          <form className="form-body" onSubmit={handleSubmit} action="">
            <label htmlFor="vehicleNumber">Número do veículo</label>
            <input
              type="text"
              id="vehicleNumber"
              name="VehicleNumber"
              placeholder="Seu Número do veículo"
              onChange={handleInput}
              value={post.VehicleNumber}
            />
            <br />
            <label htmlFor="plate">Placa</label>
            <input
              type="text"
              id="plate"
              name="Plate"
              placeholder="Sua Número do Placa "
              onChange={handleInput}
              value={post.Plate}
            />
            <br />
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              id="brand"
              name="Brand"
              placeholder="Sua Marca "
              onChange={handleInput}
              value={post.Brand}
            />
            <br />
            <label htmlFor="model">Modelo</label>
            <input
              type="text"
              id="model"
              name="Model"
              placeholder="Seu veículo Modelo"
              onChange={handleInput}
              value={post.Model}
            />
            <br />
            <input className="registerbtn" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
};

export default VehicleRegistration;
