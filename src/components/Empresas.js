import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';

export default class Empresas extends Component {

    state = {
        status : false ,
        empresas : []
    }

    cargarEmpresas = () => {
        var request = "api/Empresas/";
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                empresas : res.data
            })
        })
    }
    componentDidMount = () => {
        this.cargarEmpresas();
    }

    render() {
        return (<div className='tercio'>
            {
                this.state.empresas.map((empresa, index) => {
                    return (<div key={index} className="espaciadoY">
                        <div className="card pointer" style={{width: "18rem"}}>
                            <img src={empresa.imagen} className="card-img-top" alt="logo empresa"></img>
                            <div className="card-body">
                                <h5 className="card-title">{empresa.nombreEmpresa}</h5>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>)
    }
}
