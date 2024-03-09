import React from 'react'

const Home = () => {
    const data = [
        {
            heading: 'celio Atendimento',
            data: '50'
        },
        {
            heading: 'Ocorencia em aberto',
            data: '50'
        },
        {
            heading: 'Registros de Funcionários',
            data: '50'
        },
        {
            heading: 'Bondes disponíveis',
            data: '50'
        },
        {
            heading: 'Equipe disponível',
            data: '50'
        },
        {
            heading: 'Equipe Indisponível',
            data: '50'
        },
        {
            heading: 'Ocorrências Atendidas Hoje',
            data: '50'
        }
        , {
            heading: 'Ocorrências Atendidas no Mês',
            data: '50'
        },
        {
            heading: 'Ocorrências Atendidas no Ano',
            data: '50'
        },

    ]
    return (
        <div className="custom-container">

        
        <div className='container'>
            <div className='Dashboard_heading'>
                <h3 >Painel de Controle </h3>
            </div>
            <div className='Dashboard_cards'>


                {data.map((v, i) => {
                    return (
                        <> <div className="Dashboard_card">

                            <h6>
                                {v.heading}
                            </h6>
                            <h5>{v.data}</h5>
                        </div>
                        </>
                    )
                })}
            </div>

        </div>
        </div>
    )
}

export default Home