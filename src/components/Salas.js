import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';
import { NavLink } from 'react-router-dom';

export default class Salas extends Component {

    state = {
        status : false ,
        salas : []
    }

    cargarSalas = () => {
        var request = "api/Eventos/";
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                salas : res.data
            })
        })
    }
    componentDidMount = () => {
        this.cargarSalas();
    }

    render() {
        return (<div className='mitad'>
            {
                this.state.salas.map((sala, index) => {
                    return (<div key={index}>
                        <div className="card" style={{width: "18rem"}}>
                          <h3>Sala {sala.idSala}</h3>
                            <div className="card-body">
                                <h5 className="card-title">{sala.nombreSala}</h5>
                                <NavLink to={"#"} className='btn btn-success'>Acceder</NavLink>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>)
    }
}
