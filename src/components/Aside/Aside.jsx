import React from 'react'
import './Aside.scss'
import { Link } from 'react-router-dom'
const Aside = () => {
    return (
        <div className='main-left'>
            <div className="operation ">
                <h4>Operation</h4>
                <ul>
                    <li>
                        <Link to="/service" >Services</Link>
                    </li>
                    <li>
                        <Link to="/arrival" >Arrival at occurence</Link>

                    </li>
                    <li>
                        <Link to="/closing" >Closing occurence</Link>
                    </li>
                </ul>

            </div>
            <div className="registration">
                <h4>Registration</h4>
                <ul>
                    <li>
                        <Link to="/staffregistration" > Staff Registration</Link>
                    </li>
                    <li>
                        <Link to="/vehicleregistration" > Vehicle</Link>
                    </li>
                    <li>
                        <Link to="/guoftheday" > Gu of the day</Link>
                    </li>
                    <li>
                        <Link to="/appilcantregistration" > applicants</Link>

                    </li>
                    <li>
                        <Link to="/streetregistration" > steet</Link>

                    </li>
                    <li>

                        <Link to="/occurencecode" > occurence code</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside