import React from 'react'
// import Form from '../../components/Form/Form'
import './guRegistration.scss'
const guRegistration = () => {
  return (

    <div className="custom-container">
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Registro da guarnição</h3>
          <hr />
        </div>

<div className="row">
        <div className="col-md-3 col-sm-12 cars my-5">
          <h3 className="text-center">carro</h3>
          <div>
            <input type="radio" id="vehicle1" name="vehicle" value="Bike" />
            <label for="vehicle1" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Toyota</label>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 ml-3 guards coma my-5">
          <h3 className="text-center">Guardo</h3>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle" value="Bike" />
            <label for="vehicle1" className="ml-2"> Maaz</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> Maaz </label>
          </div>
        </div>

        <div className="col-md-2 col-sm-12 ml-5 my-5">
          
        </div>

        <div className="col-md-3 col-sm-12 guards loma my-5">
          <h3 className="text-center">Garnição Disponível</h3>
          
          <ul>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>
            <li>Maaz (Toyota)</li>

          </ul>
        </div>

<div className="gubtnnan" style={{width: "80vh"}}>
<a href="" className='btn btn-primary my-5 py-2 px-5 ml-3 guregbtn'> Atribuir</a>
</div>
       
        </div>
      </div>
    </div>


  )
}

export default guRegistration