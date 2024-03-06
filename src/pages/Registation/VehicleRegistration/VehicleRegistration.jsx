import React from 'react'
// import Form from '../../components/Form/Form'
import '../StylingFile/Style.scss'
const VehicleRegistration = () => {
  return (
    <>
       <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Vehicle registration</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Vehicle Number</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your vehicle no"/>
                     <br />
                    <label for="fname">Plate</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your vehicle plate number"/>
                     <br />
                    <label for="fname">Brand</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your  vehicle brand"/>
                     <br />
                    <label for="fname">Model</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your vehicle model"/>

                        <br />

                        <input class="registerbtn" type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default VehicleRegistration