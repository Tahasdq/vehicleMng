import React, { useState } from "react";
import axios from 'axios';
import "../StylingFile/Style.scss";

const StaffRegistration = () => {
  const [Post , setPost] = useState({
    Name:'',
    SurName : '',
    WarName:'',
    Status:true
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInput = (event) => {
    setPost({...Post, [event.target.name]: event.target.value});
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/postStaff', Post)
      .then(response => {
        console.log(response);
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
        setPost({ Name:'', SurName: '', WarName:'' }); // Clearing the fields
      })
      .catch(err => {
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
            <h2>Cadastro de pessoal</h2>
          </div>
          <form className="form-body" onSubmit={handleSubmit} action="">
            <label htmlFor="fname">Nome</label>
            <input
              type="text"
              id="fname"
              placeholder="Your Nome"
              name="Name"
              onChange={handleInput}
              value={Post.Name}
            />
            <br />
            <label htmlFor="lname">Sobrenome</label>
            <input
              type="text"
              id="lname"
              name="SurName"
              onChange={handleInput}
              placeholder="Your Sobrenome"
              value={Post.SureName}
            />
            <br />
            <label htmlFor="wname">Nome da Guerra</label>
            <input
              type="text"
              id="wname"
              name="WarName"
              onChange={handleInput}
              placeholder="Your Nome da Guerra"
              value={Post.WarName}
            />
            <br />
            <input className="registerbtn" type="submit" value="Enviar"/>
          </form>
        </div>
      </section>
    </>
  );
};

export default StaffRegistration;
