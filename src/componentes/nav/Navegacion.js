import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './../../css/Navegacion.css';
class Navegacion extends Component {

    logout = () => {
        this.props.auth.logout();
    }

    login = () => {
        this.props.auth.login();
    }

    render () {
        const {isAuthenticated} = this.props.auth;

        let resultado;

        if(isAuthenticated()) {
            console.log('AUTHENTICATED');
            resultado = <a onClick={this.logout}>Cerrar Sesión</a>
        } else {
            console.log('NOT AUTHENTICATED');
            resultado = <a onClick={this.login}>Iniciar Sesión</a>
        }

        return ( 
            <nav className='navegacion'>
                <NavLink to={'/nosotros'} activeClassName='activo'>Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName='activo'>Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName='activo'>Contacto</NavLink>
                {resultado}
            </nav>
         )
    }
}
 
export default Navegacion;