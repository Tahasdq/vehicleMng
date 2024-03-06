import React from 'react'
import '../StylingFile/Style.scss'
const OccurenceCodeRegistration = () => {
  return (
    <>
      <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Occurence Code registration</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Name</label>
                     <input type="text" id="fname" name="firstname" />
                     <br />
                    <label for="fname">CPF</label>
                     <input type="text" id="fname" name="firstname" />
                     <br />
                    <label for="fname">Address</label>
                     <input type="text" id="fname" name="firstname" />
                     <br />
                    <label for="fname">Reference</label>
                     <input type="text" id="fname" name="firstname" />
                     <br />
                        <input class="registerbtn" type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default OccurenceCodeRegistration 