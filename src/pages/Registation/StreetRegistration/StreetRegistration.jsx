import React, { useState } from "react";
import "../StylingFile/Style.scss";
import axios from "axios";

const StreetRegistration = () => {
  const [Post, setPost] = useState({
    Stret: "",
    ZipCode: "",
    Neigbourhood: "",
    City: ""
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInput = (event) => {
    setPost({ ...Post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/poststreet", Post)
      .then((response) => {
        console.log(response);
        setSubmitStatus("success");
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000); // Clear the success message after 1 second
        setPost({ Stret: "", ZipCode: "", Neigbourhood: "", City: "" }); // Clear the fields
      })
      .catch((err) => {
        console.log(err);
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000); // Clear the error message after 1 second
      });
  };

  return (
    <>
      {submitStatus === "success" && (
        <div className="alert alert-success" style={{ width: "20%" }} role="alert">
          Submitted successfully
        </div>
      )}
      {submitStatus === "error" && (
        <div className="alert alert-danger" style={{ width: "20%" }} role="alert">
          An error occurred
        </div>
      )}
      <section id="form">
        <div className="form-wrapper">
          <div className="form-heading">
            <h2>Cadastro de Rua</h2>
          </div>
          <form className="form-body" onSubmit={handleSubmit} action="">
            <label htmlFor="fname">Rua</label>
            <input type="text" id="fname" name="Stret" value={Post.Stret} onChange={handleInput} />
            <br />
            <label htmlFor="fname">CEP</label>
            <input type="text" id="fname" name="ZipCode" value={Post.ZipCode} onChange={handleInput} />
            <br />
            <label htmlFor="fname">bairro</label>
            <input type="text" id="fname" name="Neigbourhood" value={Post.Neigbourhood} onChange={handleInput} />
            <br />
            <label htmlFor="fname">cidade</label>
            <input type="text" id="fname" name="City" value={Post.City} onChange={handleInput} />
            <br />
            <input className="registerbtn" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
};

export default StreetRegistration;
