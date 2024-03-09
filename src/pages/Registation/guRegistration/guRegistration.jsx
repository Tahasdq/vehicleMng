import React from 'react'
// import Form from '../../components/Form/Form'
import './guRegistration.scss'
const guRegistration = () => {
  return (
    <>
      <div className="gu-main">
        <div className="gu-wrapper">
          <div className="gucontent">
            <div className="carAndGuards">
              <div className="guards guardandcarchildren">
                <h6>Guards</h6>
                <input type="checkbox" name="Ahmed" id=""  />
                <label >John</label> <br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >John</label><br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >John</label><br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >Johns</label><br />
              </div>
              <div className="cars guardandcarchildren">
              <h6>Cars</h6>
                <input type="checkbox" name="Ahmed" id=""  />
                <label >Toyota</label> <br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >Toyota</label><br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >Toyota</label><br />
                <input type="checkbox" name="Ahmed" id=""  />
                <label >Toyota</label><br />
              </div>
            </div>
            <div className="guoftheday">
              <h5>Gu of the day</h5>
              <ul>
                <li>
                  Ahmed(Toyota)
                </li>
                <li>
                  Ahmed(Toyota)
                </li>
                <li>
                  Ahmed(Toyota)
                </li>
                <li>
                  Ahmed(Toyota)
                </li>
                <li>
                  Ahmed(Toyota)
                </li>
              </ul>
            </div>
          </div>
        <div className="button-div">
        <input  type="submit" value="Submit"/>
        </div>
        </div>
      </div>
    </>
  )
}

export default guRegistration