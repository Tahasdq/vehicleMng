import React from 'react'
import '../StylingFile/Style.scss'
const ApplicantRegistration= () => {
  return (
    <>
      <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Registro do candidato</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Nome</label>
                     <input type="text" id="fname" name="primeiro nome" />
                     <br />
                    <label for="fname">CPF</label>
                     <input type="text" id="fname" name="CPF" />
                     <br />
                    <label for="fname">Rua</label>
                     <input type="text" id="fname" name="Rua" />
                     <br />
                    <label for="fname">Referencia</label>
                     <input type="text" id="fname" name="firstname" />
                     <br />

                        <input class="registerbtn" type="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default ApplicantRegistration 