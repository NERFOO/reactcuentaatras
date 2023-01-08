import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import './css/estilos.css';

export default class CrearEmpresa extends Component {

	state = {
		status : false,
		mensaje : ""
	}

	inputNombre = React.createRef();
	crearEmpresa = (e) => {
		e.preventDefault();

		var nombreEmpresa = this.inputNombre.current.value;

		var empresaNew = {
			nombreEmpresa : nombreEmpresa
		}

		var request = `api/Empresas/CreateEmpresa/${nombreEmpresa}`;
		var url = Global.url + request;

		axios.post(url, empresaNew).then( res => {
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
		<h1 style={{padding: "25px"}}>Crear Empresa</h1>

		<p className='warning'>Para crear la empresa solamente debe introducir el nombre</p>

		<form>
			<label>Nombre</label>
			<input type="text" className='form-control' ref={this.inputNombre} required/>

			<br/>

			<button onClick={this.crearEmpresa} className="btn btn-success">Crear empresa</button>

			<br/><br/>

			<h3 style={{color: "green"}}>{this.state.mensaje}</h3>
		</form>
	</div>)
	}
}
