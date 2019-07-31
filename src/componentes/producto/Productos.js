import React, { Component } from 'react';
import Producto from './Producto';
import  './../../css/Productos.css';
import Buscador from './../buscador/Buscador';
import axios from 'axios';

class Productos extends Component {

    state = {
        productos : [],
        terminoBusqueda : ''
    }
    
    componentWillMount() {
        this.callApi();
    }

    callApi = () => {
        const {getAccessToken} = this.props.auth;
        const headers = {
            'Authorization' : `Bearer ${getAccessToken()}`
        };

        //const url = 'http://localhost:5000/productos';
        const url = 'http://demo0597538.mockable.io/productos';

        return axios.get(url, {headers})
            //.then(response => console.log(response.data.productos))
            .then(response => this.setState({
                productos : response.data.productos
            }));
    }

    login = () => {
        this.props.auth.login();
    }

    realizarBusqueda = (termino) => {
        if(termino.length > 3) {

            //obtener copia del state
            let productos = [...this.state.productos];

            let resultado;
            //filtrar
            resultado = productos.filter( producto => (
                producto.nombre.toLowerCase().indexOf( termino.toLowerCase()) !== -1
            ))

            console.log(resultado);
            // enviar al state los productos filtrados y la busqueda
            this.setState({
                terminoBusqueda : termino,
                productos : resultado
            })
        } else {
            this.setState({
                terminoBusqueda : ''
            }, () => {
                this.callApi();
            })
        }
    }


    render() { 

        const {isAuthenticated} = this.props.auth;

        return ( 
            <div className='productos'>
               
                { isAuthenticated() && (
                    <React.Fragment>
                        <h2>Nuestros Productos</h2>
                        <Buscador
                            realizarBusqueda={this.realizarBusqueda}
                        />
                        <ul className='lista-productos'>
                            {Object.keys(this.state.productos).map( producto =>(
                                <Producto 
                                    key={producto}
                                    informacion = {this.state.productos[producto]}
                                />
                            ))}
                        </ul>
                     </React.Fragment>
                )}
               

                { !isAuthenticated() && (
                    <div className='contenedor-boton'>
                        <p>Inicia sesión para ver los productos</p>
                        <a className='boton' onClick={this.login}>Iniciar Sesión</a>
                    </div>
                )}

            </div>
        );
    }
}
 
export default Productos;