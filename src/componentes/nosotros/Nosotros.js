import React, { Component } from 'react';
import './../../css/Nosotros.css';

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='contenedor-nosotros'>
                <div className='imagen'>
                    <img src='/img/camisa_1.png' alt='Imagen Nosotros' />
                </div>
                <div className='contenido'>
                    <h2>Sobre Nosotros</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent ullamcorper eros eu condimentum volutpat. 
                    Phasellus non erat quam. Sed eget nulla ullamcorper, sollicitudin nisl eu, facilisis nulla. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                     Vivamus maximus erat magna, ut malesuada magna lobortis ut. Proin nec elit odio.
                      Donec fermentum mi non nibh luctus, in scelerisque ex finibus. 
                      Cras placerat, justo sit amet vulputate aliquam, orci diam consequat orci, 
                      in mollis velit ex at dui. Integer sit amet pretium felis. Nulla ut pharetra ipsum. 
                      Vestibulum ut accumsan lacus. Morbi ac ex lacus.
                    </p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;