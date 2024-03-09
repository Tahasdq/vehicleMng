import React from 'react'
// import Form from '../../components/Form/Form'
import '../StylingFile/Style.scss'
const VehicleRegistration = () => {
  return (
    <>
       <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Registro de Veículo
</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Número do veículo</label>
                     <input type="text" id="fname" name="firstname" placeholder="Sua Número do veículo"/>
                     <br />
                    <label for="fname">Placa
</label>
                     <input type="text" id="fname" name="firstname" placeholder="Sua Número do Placa "/>
                     <br />
                    <label for="fname">Marca</label>
                     <input type="text" id="fname" name="firstname" placeholder="Sua Marca "/>
                     <br />
                    <label for="fname">Modelo</label>
                     <input type="text" id="fname" name="firstname" placeholder="Seu veículo Modelo"/>

                        <br />

                        <input class="registerbtn" type="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default VehicleRegistration