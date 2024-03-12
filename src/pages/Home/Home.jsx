import React from 'react'

const Home = () => {
    const data = [
        {
            heading: 'celio Atendimento',
            data: '24'
        },
        {
            heading: 'Ocorencia em aberto',
            data: '32'
        },
        {
            heading: 'Registros de Funcionários',
            data: '12'
        },
        {
            heading: 'Bondes disponíveis',
            data: '24'
        },
        {
            heading: 'Equipe disponível',
            data: '31'
        },
        {
            heading: 'Equipe Indisponível',
            data: '22'
        },
        {
            heading: 'Ocorrências Atendidas Hoje',
            data: '11'
        }
        , {
            heading: 'Ocorrências Atendidas no Mês',
            data: '31'
        },
        {
            heading: 'Ocorrências Atendidas no Ano',
            data: '32'
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