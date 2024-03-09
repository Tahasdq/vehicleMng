import React from 'react'
import '../StylingFile/Style.scss'
const StaffRegistration = () => {
  return (
    <>
      <section id='form'>
                <div className="form-wrapper">

                    <div className="form-heading">
                        <h2>Cadastro de pessoal</h2>
                    </div>
                    <form className='form-body' action="">
                    <label for="fname">Nome</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Nome"/>
                     <br />
                    <label for="fname">Sobrenome
</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Sobrenome"/>
                     <br />
                    <label for="fname">Nome da Guerra
</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Nome da Guerra"/>
                     <br />
                        <input class="registerbtn" type="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
    </>
  )
}

export default StaffRegistration