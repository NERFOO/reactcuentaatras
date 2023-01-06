import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';

export default class Eventos extends Component {

    state = {
        status : false ,
        eventos : []
    }

    cargarEventos = () => {
        var request = "api/Eventos/";
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
                    return (<div key={index}>
                        <div className="card" style={{width: "18rem"}}>
                          <h3>Evento {evento.idEvento}</h3>
                            <div className="card-body">
                                <h5 className="card-title">{evento.nombreEvento}</h5>
                                <span className="card-title">Inicio: {evento.inicioEvento}</span>
                                <br/>
                                <span className="card-title">Final: {evento.finEvento}</span>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>)
    }
}
