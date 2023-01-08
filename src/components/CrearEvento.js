import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';

export default class CrearEvento extends Component {

	state = {
		status : false,
		mensaje : ""
	}

	inputId = React.createRef();
	inputNombre = React.createRef();
	inputInicioEvento = React.createRef();
	inputFinEvento = React.createRef();

	crearEvento = (e) => {
		e.preventDefault();

		var nombreEvento = this.inputNombre.current.value;
		var inicioEvento = this.inputInicioEvento.current.value;
		var finEvento = this.inputFinEvento.current.value;

		var eventoNew = {
			idEvento : 0,
			nombreEvento : nombreEvento,
			inicioEvento : inicioEvento,
			finEvento : finEvento
		}

		var request = "api/Eventos";
		var url = Global.url + request;

		axios.post(url, eventoNew).then( res => {
			this.setState({
				status : true,
				mensaje : "Se ha añadido correctamente"
			});
			console.log("Añadido correctamente");
			this.inputNombre.current.value = "";
			this.inputInicioEvento.current.value = "";
			this.inputFinEvento.current.value = "";
		})
	}

	render() {
		return (<div style={{margin: "25px"}}>
		<h1 style={{padding: "25px"}}>Crear Evento</h1>

		<p className='warning'>Para crear el evento debes proporcionar un nombre para identificarlo, un inicio y un fin de evento</p>

		<form>
			<label>Nombre del evento</label>
			<input type="text" className='form-control' ref={this.inputNombre} required/>
			<label>Inicio del evento</label>
			<input type="datetime-local" className='form-control' ref={this.inputInicioEvento} required/>
			<label>Fin del evento</label>
			<input type="datetime-local" className='form-control' ref={this.inputFinEvento} required/>

			<br/>

			<button onClick={this.crearEvento} className="btn btn-success">Crear evento</button>

			<br/><br/>

			<h3 style={{color: "green"}}>{this.state.mensaje}</h3>
		</form>
	</div>)
	}
}
