import React, { Component } from 'react';
import './css/estilos.css';
import tajamar from './../assets/images/tajamar.png';
import linkedin from './../assets/images/linkedin.svg';
import twitter from './../assets/images/twitter.svg';
import youtube from './../assets/images/youtube.svg';

export default class Home extends Component {
    render() {
        return (<footer>

            <div className='divisorFooter'>
                <div>
                    <ul>
                        <h3>Nuestra empresa</h3>

                        <li><a href={`https://formacion.tajamar.es/content/2-aviso-legal`}>Aviso legal</a></li>
                        <li><a href={`https://formacion.tajamar.es/content/3-terminos-y-condiciones-de-uso`}>Terminos y condiciones</a></li>
                        <li><a href={`https://formacion.tajamar.es/content/4-sobre-nosotros`}>Sobre nosotros</a></li>
                        <li><a href={`https://formacion.tajamar.es/contactenos`}>Contacte con nosotros</a></li>
                        <li><a href={`https://formacion.tajamar.es/mapa%20del%20sitio`}>Mapa del sitio</a></li>
                    </ul>
                </div>

                <div className='centradoY espaciadoX'>
                    <a href='https://www.fundaciontajamar.es/' target="_blank" rel="noreferrer"><img src={tajamar} alt='Tajamar'></img></a>
                    <a href='https://es.linkedin.com/showcase/tech-tajamar-fp-professional-education' target="_blank" rel="noreferrer"><img src={linkedin} alt='Linkedin'></img></a>
                    <a href='https://twitter.com/TechRiders_es' target="_blank" rel="noreferrer"><img src={twitter} alt='Twitter'></img></a>
                    <a href='https://www.youtube.com/@TechRiders_es' target="_blank" rel="noreferrer"><img src={youtube} alt='YouTube'></img></a>
                </div>
            </div>

            <p>&copy; 2023 Tajamar - Developed by Jaime Calderón, Raúl García & Andrei Garbea</p>
        </footer>)
    }
}