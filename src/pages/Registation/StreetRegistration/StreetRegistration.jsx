import React from 'react'
import '../StylingFile/Style.scss'

const StreetRegistration = () => {
  return (
    <>
    <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Cadastro de Rua</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Rua</label>
                     <input type="text" id="fname" name="Rua" />
                     <br />
                    <label for="fname">CEP</label>
                     <input type="text" id="fname" name="CEP" />
                     <br />
                    <label for="fname">bairro</label>
                     <input type="text" id="fname" name="bairro" />
                     <br />
                    <label for="fname">cidade</label>
                     <input type="text" id="fname" name="cidade" />
                     <br />
                        <input class="registerbtn" type="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default StreetRegistration