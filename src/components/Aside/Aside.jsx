import React from 'react'
import './Aside.scss'
import { Link } from 'react-router-dom'
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Aside = () => {
    return (
        <div className='main-left'>
            <div className="logo">

                <Link to="/">
                    LOGO
                </Link>
            </div>
            <div className="main-left-wrapper">

                <div className="operation ">


                    <h5>Operações</h5>
                    <ul>

                        <li>
                            <BoltIcon fontSize="small"  />
                            <Link to="/service" >Serviço</Link>
                        </li>

                        <li>
                            <EmojiObjectsIcon fontSize="small" />
                            <Link to="/guoftheday" >Despacho da Guarnição</Link>
                        </li>



                        <li>
                            <GroupIcon  fontSize="small"/>
                            <Link to="/arrival" >Chegada à Ocorrência</Link>

                        </li>


                        <li>
                            <LibraryBooksIcon fontSize="small" />
                            <Link to="/closing" >Encerramento da Ocorrência</Link>
                        </li>
                    </ul>

                </div>
                <div className="registration">
                    <h5>Registros</h5>
                    <ul>
                        <li>
                            <EmojiObjectsIcon  fontSize="small"/>
                            <Link to="/staffregistration" > Equipe</Link>
                        </li>
                        <li>
                            <SettingsIcon fontSize="small" />
                            <Link to="/vehicleregistration" > Veículo</Link>
                        </li>
                        <li>
                            <SettingsIcon fontSize="small" />
                            <Link to="/guregistration" > Guarnição do Dia</Link>
                        </li>
                        <li>
                            <SettingsIcon fontSize="small"/>
                            <Link to="/appilcantregistration" > Candidato</Link>

                        </li>
                        <li>
                            <SettingsIcon fontSize="small"/>
                            <Link to="/streetregistration" > Endereço</Link>

                        </li>
                        <li>
                            <SettingsIcon fontSize="small"/>
                            <Link to="/occurencecode" > occurence code</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aside