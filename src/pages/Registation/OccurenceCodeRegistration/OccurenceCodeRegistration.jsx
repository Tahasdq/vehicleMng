// import React ,{useState} from 'react'
// import '../StylingFile/Style.scss'
// import axios from 'axios';
// const OccurenceCodeRegistration = () => {
  
//   const [Post, setPost] = useState({
//     Code: "",
//     Description: "",
//     OBS: "",
//   });


//   const [submitStatus, setSubmitStatus] = useState(null);
//   const handleInput = (event) => {
//     setPost({ ...Post, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3000/postoccurance", Post)
//       .then((response) => {
//         setSubmitStatus('success');
//         setTimeout(() => {
//           setSubmitStatus(null);
//         }, 1000); 
//           setPost({Code: "",
//           Description: "",
//           OBS: ""})

//       })
//       .catch((err) => {
//         setSubmitStatus('error');
//         setTimeout(() => {
//           setSubmitStatus(null);
//         }, 1000); 
//         setPost({Code: "",
//         Description: "",
//         OBS: ""})
//         console.log(err)

//       });
//   };  
//   return (
//     <>
//     {submitStatus === 'success' && (
//             <div className="alert alert-success" style={{width:'20%'}} role="alert">
//               Submitted successfully
//             </div>
//           )}
//           {submitStatus === 'error' && (
//             <div className="alert alert-danger" style={{width:'20%'}} role="alert">
//               An error occurred
//             </div>
//           )}
//       <section id='form'>

//                 <div className="form-wrapper">

//                     <div className="form-heading">
//                         <h2>Cadastro de Código de Ocorrência</h2>
//                     </div>
//                     <form className='form-body' action="" onSubmit={handleSubmit}>
//                     <label for="fname">Código de registro</label>
//                      <input type="text" id="fname" name="Code" onChange={handleInput} />
//                      <br />
//                     <label for="fname">descrição</label>
//                      <input type="text" id="fname" name="Description" onChange={handleInput} />
//                      <br />
//                     <label for="fname">OBS</label>
//                      <input type="text" id="fname" name="OBS" onChange={handleInput} />
//                      <br />
//                         <input class="registerbtn" type="submit" value="Enviar" />
//                     </form>
//                 </div>

               

//             </section>
//     </>
//   )
// }

// export default OccurenceCodeRegistration 




import React, { useState } from 'react';
import '../StylingFile/Style.scss';
import axios from 'axios';

const OccurrenceCodeRegistration = () => {
  const [post, setPost] = useState({
    Code: '',
    Description: '',
    OBS: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInput = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/postoccurance', post)
      .then(response => {
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
        console.log(response)
        setPost({ Code: '', Description: '', OBS: '' }); // Clearing the fields
      })
      .catch(err => {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 1000);
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
            <h2>Cadastro de Código de Ocorrência</h2>
          </div>
          <form className="form-body" onSubmit={handleSubmit}>
            <label htmlFor="code">Código de registro</label>
            <input type="text" id="code" name="Code" value={post.Code} onChange={handleInput} />
            <br />
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              name="Description"
              value={post.Description}
              onChange={handleInput}
            />
            <br />
            <label htmlFor="obs">OBS</label>
            <input type="text" id="obs" name="OBS" value={post.OBS} onChange={handleInput} />
            <br />
            <input className="registerbtn" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
};

export default OccurrenceCodeRegistration;
