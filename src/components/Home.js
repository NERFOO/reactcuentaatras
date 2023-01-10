import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/estilos.css';
import tajamar from './../assets/images/tajamar.png';
import dia18 from './../assets/images/dia18.jpg';
import evento from './../assets/images/evento.jpg';

export default class Home extends Component {
    render() {
        return (<div>

            <h1 style={{padding: "30px 0"}}>Timer it is</h1>

            <div className='glass'>
                <div>
                    <h3>Empresas</h3>
                    <img src={tajamar} alt='Tajamar'></img>

                    <br/><br/>

                    <NavLink className={"btn btn-success"} to={`/empresas`}>Ver empresas</NavLink>
                    <span> </span>
                    <NavLink className={"btn btn-info"} to={`/crearEmpresa`}>Crear empresa</NavLink>
                </div>

                <div>
                    <h3>Eventos</h3>

                    <img src={dia18} alt='Dia Evento'></img>

                    <br/><br/>

                    <NavLink className={"btn btn-success"} to={`/eventos`}>Crear evento</NavLink>
                </div>

                <div>
                    <h3>Salas</h3>
                    <img src={evento} alt='Sala Evento'></img>

                    <br/><br/>

                    <NavLink className={"btn btn-success"} to={`/salas`}>Ver salas</NavLink>
                    <span> </span>
                    <NavLink className={"btn btn-info"} to={`/crearSala`}>Crear sala</NavLink>
                </div>
            </div>

        </div>)
    }
}