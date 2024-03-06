import React from 'react'
import '../StylingFile/Style.scss'
const StaffRegistration = () => {
  return (
    <>
      <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Staff registration</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Name</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Name"/>
                     <br />
                    <label for="fname">SurName</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Surname"/>
                     <br />
                    <label for="fname">War Name</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your War Name"/>
                     <br />
                        <input class="registerbtn" type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default StaffRegistration