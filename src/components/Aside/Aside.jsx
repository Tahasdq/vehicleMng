import React, { useState } from 'react'
import './Aside.scss'
import { Link } from 'react-router-dom'
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import StreetviewIcon from '@mui/icons-material/Streetview';
import CloseIcon from '@mui/icons-material/Close';
const Aside = ({sendDataToParent}) => {

  const handleTrigger = () => {
    sendDataToParent(false);   
};

//   const sendData =()=>{
//         sendDatatoparent(isOpen)
//   }
    return (
        <div className={`main-left `}>
            <div className="logoandmenuicon">

                <Link to="/">
                    LOGO
                </Link>
                <div className="menu-icon" onClick={handleTrigger} >
                    <CloseIcon />
                </div>

            </div>
            <div className="main-left-wrapper">

                <div className="operation ">


                    <h5>Operações</h5>
                    <ul>

                        <li onClick={handleTrigger}>
                            <BoltIcon fontSize="small" />
                            <Link to="/service" >Serviço</Link>
                        </li>

                        <li onClick={handleTrigger}>
                            <EmojiObjectsIcon fontSize="small" />
                            <Link to="/guoftheday" >Despacho da Guarnição</Link>
                        </li>



                        <li onClick={handleTrigger}>
                            <GroupIcon fontSize="small" />
                            <Link to="/arrival" >Chegada à Ocorrência</Link>

                        </li>


                        <li onClick={handleTrigger}>
                            <LibraryBooksIcon fontSize="small" />
                            <Link to="/closing" >Encerramento da Ocorrência</Link>
                        </li>
                    </ul>

                    <div className="registration">
                        <h5>Registros</h5>
                        <ul>
                        <li onClick={handleTrigger}>
                                <EmojiObjectsIcon fontSize="small" />
                                <Link to="/staffregistration" > Equipe</Link>
                            </li>
                            <li onClick={handleTrigger}>
                                <DirectionsCarIcon fontSize="small" />
                                <Link to="/vehicleregistration" > Veículo</Link>
                            </li >
                            <li onClick={handleTrigger}>
                                <SettingsIcon fontSize="small" />
                                <Link to="/guregistration" > Guarnição do Dia</Link>
                            </li>
                            <li onClick={handleTrigger}>
                                <PersonIcon fontSize="small" />
                                <Link to="/appilcantregistration" > Candidato</Link>

                            </li>
                            <li onClick={handleTrigger}>
                                <StreetviewIcon fontSize="small" />
                                <Link to="/streetregistration" > Endereço</Link>

                            </li>
                            <li onClick={handleTrigger}>
                                <CodeIcon fontSize="small" />
                                <Link to="/occurencecode" > occurence code</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside