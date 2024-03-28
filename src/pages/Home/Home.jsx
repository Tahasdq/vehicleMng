import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

    // const [Dashboard, setDashboard] = useState([])
    const [occurenceInCareLength, setoccurenceInCareLength] = useState(null)
    const [openCasesLength, setopenCasesLength] = useState(null)
    const [StaffRegistrationsLength, setStaffRegistrationsLength] = useState(null)
    const [vehicleRegistrationsLength, setvehicleRegistrationsLength] = useState(null)
    const [guAvailableLength, setguAvailableLength] = useState(null)
    const [guNotAvailableLength, setguNotAvailableLength] = useState(null)
    
    const [todayOccurencesLength, settodayOccurencesLength] = useState(null)
    const [monthOccurencesLength, setMonthOccurencesLength] = useState(null)
    const [yearOccurencesLength, setYearOccurencesLength] = useState(null)


    useEffect(() => {
        axios.get("http://localhost:3000/getnewoccuranceAllStatusWithZeroAndTwo")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setoccurenceInCareLength(data.length)
        })
        axios.get("http://localhost:3000/getnewoccuranceOpenCases")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setopenCasesLength(data.length)
        })
        axios.get("http://localhost:3000/getAllStaff")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setStaffRegistrationsLength(data.length)
        })
        axios.get("http://localhost:3000/getVehcle")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setvehicleRegistrationsLength(data.length)
        })
        axios.get("http://localhost:3000/getGarrisonTrue")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setguAvailableLength(data.length)
        })
        axios.get("http://localhost:3000/getGarrisonFalse")
            .then((response) => {
                let data = response.data
                // console.log(data.length)
                setguNotAvailableLength(data.length)
        })
        axios.get("http://localhost:3000/occurrences/today")
            .then((response) => {
                let data = response.data.count
                // console.log("today total occuenrences : " , data)
                settodayOccurencesLength(data)
        })
        axios.get("http://localhost:3000/occurrences/month")
            .then((response) => {
                let data = response.data.count
                // console.log(data.length)
                setMonthOccurencesLength(data)
        })
        axios.get("http://localhost:3000/occurrences/year")
            .then((response) => {
                let data = response.data.count
                // console.log(data.length)
                setYearOccurencesLength(data)
        })


    }, [])
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
        <div className="custom-container text-center">


            <div className='container'>
                <div className='Dashboard_heading'>
                    <h3 >Painel de Controle </h3>
                </div>
                <div className='Dashboard_cards'>

                    <>
                        <div className="Dashboard_card">
                            <h6>
                                celio Atendimento
                            </h6>
                            <h5>{occurenceInCareLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Ocorencia em aberto
                            </h6>
                            <h5>{openCasesLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Registros de Funcionários
                            </h6>
                            <h5>{StaffRegistrationsLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                                Bondes disponíveis
                            </h6>
                            <h5>{vehicleRegistrationsLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            celio Atendimento
                            </h6>
                            <h5>{guAvailableLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Equipe disponível
                            </h6>
                            <h5>{guNotAvailableLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Ocorrências Atendidas Hoje
                            </h6>
                            <h5>{todayOccurencesLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Ocorrências Atendidas no Mês
                            </h6>
                            <h5>{monthOccurencesLength}</h5>
                        </div>
                        <div className="Dashboard_card">
                            <h6>
                            Ocorrências Atendidas no Ano
                            </h6>
                            <h5>{yearOccurencesLength}</h5>
                        </div>
                    </>

                </div>

            </div>
        </div>
    )
}

export default Home