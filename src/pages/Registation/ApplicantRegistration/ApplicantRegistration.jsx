import React, { useState } from 'react';
import axios from 'axios';

const ApplicantRegistration = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const [post, setPost] = useState({
    Name: '',
    CPF: '',
    Address: '',
    References: '', // Corrected typo in the state variable name
  });

  const handleInput = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/postApplicant', post)
      .then(response => {
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
        setPost({ Name: '', CPF: '', Address: '', References: '' }); // Clearing the fields
        console.log(response);
      })
      .catch(err => {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
        console.log(err);
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
            <h2>Registro do candidato</h2>
          </div>
          <form className="form-body" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="Name" value={post.Name} onChange={handleInput} />
            <br />
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="CPF" value={post.CPF} onChange={handleInput} />
            <br />
            <label htmlFor="address">Rua</label>
            <input type="text" id="address" name="Address" value={post.Address} onChange={handleInput} />
            <br />
            <label htmlFor="references">Referência</label>
            <input type="text" id="references" name="References" value={post.References} onChange={handleInput} />
            <br />
            <input className="registerbtn" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplicantRegistration;
