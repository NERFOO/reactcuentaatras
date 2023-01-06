import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Empresas from './components/Empresas';
import CrearEmpresa from './components/CrearEmpresa';
import Eventos from './components/Eventos';
import CrearEvento from './components/CrearEvento';
import Salas from './components/Salas';
import CrearSala from './components/CrearSala';

export default class Router extends Component {
    render() {

        //FUNCIONES DONDE RECOGEMOS LOS VALORES EN LA URL Y LOS DEVOLVEMOS COMO PROPS
        // function CargarComponente() {
        //     var { id, nom, valor } = useParams();
        //     return(<Peliculas id={id} nom={nom} valor={valor}/>)
        // }

        return (<div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/empresas" element={<Empresas />}/>
                    <Route path="/crearEmpresa" element={<CrearEmpresa />}/>
                    <Route path="/eventos" element={<Eventos />}/>
                    <Route path="/crearEvento" element={<CrearEvento />}/>
                    <Route path="/salas" element={<Salas />}/>
                    <Route path="/crearSala" element={<CrearSala />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>)
    }
}