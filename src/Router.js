import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

export default class Router extends Component {
    render() {

        //FUNCIONES DONDE RECOGEMOS LOS VALORES EN LA URL Y LOS DEVOLVEMOS COMO PROPS
        // function CargarComponente() {
        //     var { id, nom, valor } = useParams();
        //     return(<Peliculas id={id} nom={nom} valor={valor}/>)
        // }

        return (<div>
            <BrowserRouter>
            {/* <Menu /> */}
                <Routes>
                    {/*CREACION DE LAS RUTAS*/}
                    <Route path="/" element={<Home />}/>
                    {/* <Route path="/genero/:id/:nom/:valor" element={<CargarComponente />}/> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>)
    }
}