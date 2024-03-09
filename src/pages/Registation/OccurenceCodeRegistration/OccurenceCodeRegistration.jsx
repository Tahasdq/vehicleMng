import React from 'react'
import '../StylingFile/Style.scss'
const OccurenceCodeRegistration = () => {
  return (
    <>
      <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Cadastro de Código de Ocorrência</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Código de registro</label>
                     <input type="text" id="fname" name="Código de registro" />
                     <br />
                    <label for="fname">descrição</label>
                     <input type="text" id="fname" name="descrição" />
                     <br />
                    <label for="fname">OBS</label>
                     <input type="text" id="fname" name="OBS" />
                     <br />
                        <input class="registerbtn" type="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default OccurenceCodeRegistration 