import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';
import Timer from './Timer';

export default class Eventos extends Component {

    state = {
        status : false ,
        eventos : []
    }

    cargarEventos = () => {
        var request = "api/TimerEventos/";
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                eventos : res.data
            })
        })
    }
    componentDidMount = () => {
        this.cargarEventos();
    }

    render() {
        return (<div className='mitad'>
            {
                this.state.eventos.map((evento, index) => {
                    return (<div key={index} className="espaciadoY">
                        <div className="card pointer">
                            <h3>Evento {evento.uniqueId}</h3>
                            <div className="card-body">
                                <h5 className="card-title">Evento: {evento.evento}</h5>
                                <h5 className="card-title">Empresa: {evento.empresa}</h5>
                                <h5 className="card-title">Sala: {evento.sala}</h5>
                                <span className="card-title">Inicio: {evento.inicioEvento}</span>
                                <br/>
                                <span className="card-title">Final: {evento.finEvento}</span>
                            </div>
                        </div>





                        <div>
                            <Timer seconds={evento.duracion * 60}/>
                        </div>
                    </div>)
                })
            }
        </div>)
    }
}
