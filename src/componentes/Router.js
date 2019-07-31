import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Productos from './producto/Productos';
import Nosotros from './nosotros/Nosotros';
import Error from './comun/Error';
import infoProductos from './../datos/datos.json';
import Header from './comun/Header';
import Navegacion from './nav/Navegacion';
import UnidadProducto from './producto/UnidadProducto';
import Contacto from './contacto/Contacto';

class Router extends Component {

    state = {
        productos : [],
        terminoBusqueda : ''
    }
    
    componentWillMount() {
        this.setState({
            productos : infoProductos
        })
    }

    realizarBusqueda = (termino) => {
        if(termino.length > 3) {
            this.setState({
                terminoBusqueda : termino
            })
        } else {
            this.setState({
                terminoBusqueda : ''
            })
        }
    }



    render() { 

        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if(busqueda !== '') {
            resultado = productos.filter( producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()) !== -1
            ))
        } else {
            resultado = productos;
        }

        return ( 
            <BrowserRouter>
                <div className='contenedor'>
                    <Header />
                    <Navegacion />
                    <Switch>
                        <Route exact path='/' render={() =>(
                            <Productos 
                                productos = {resultado}
                                realizarBusqueda = {this.realizarBusqueda}
                            />
                        )}/>
                        <Route exact path='/nosotros' component={Nosotros}/>
                        <Route exact path='/productos' render={ () => (
                            <Productos 
                                productos = {resultado}
                                realizarBusqueda = {this.realizarBusqueda}
                            />
                        )}/>
                        <Route exact path='/producto/:productoId' render={(props) => {
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            return (
                                <UnidadProducto 
                                    producto={this.state.productos[idProducto]}
                                />
                            )
                        }} />
                        <Route exact path='/contacto' component={Contacto} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;