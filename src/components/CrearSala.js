import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';

export default class CrearSala extends Component {

	state = {
		status : false,
		mensaje : ""
	}

	inputNombre = React.createRef();
	crearSala = (e) => {
		e.preventDefault();

		var nombreSala = this.inputNombre.current.value;

		var salaNew = {
			nombreSala : nombreSala
		}

		var request = `api/Salas/CreateSala/${nombreSala}`;
		var url = Global.url + request;

		axios.post(url, salaNew).then( res => {
			this.setState({
				status : true,
				mensaje : "Se ha añadido correctamente"
			});
			console.log("Añadido correctamente");
			this.inputNombre.current.value = "";
		})
	}

	render() {
		return (<div style={{margin: "25px"}}>
		<h1 style={{padding: "25px"}}>Crear Sala</h1>

		<p className='warning'>Para crear la sala solamente debe introducir el nombre de la sala</p>

		<form>
			<label>Nombre</label>
			<input type="text" className='form-control' ref={this.inputNombre} required/>

			<br/>

			<button onClick={this.crearSala} className="btn btn-success">Crear sala</button>

			<br/><br/>

			<h3 style={{color: "green"}}>{this.state.mensaje}</h3>
		</form>
	</div>)
	}
}
