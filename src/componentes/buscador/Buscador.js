import React, { Component } from 'react';
import './../../css/Buscador.css';

class Buscador extends Component {

    busqueda = (e) => {
        const termino = e.target.value;
        this.props.realizarBusqueda(termino);
    }

    render() { 
        return ( 
            <form className='buscador'>
                <input type='text' placeholder='Búsqueda' onChange={this.busqueda}/>
            </form>
         );
    }
}
 
export default Buscador;