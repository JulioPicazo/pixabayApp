import React, { Component } from 'react';
 
export class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        //Codigo javaScript
        e.preventDefault();

        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        console.log('Desde componente hijo: ' + termino );

        //Lo que enviamos al componente principal
        //Enviar datos de componente hijo a padre
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            
            //Le agregamos un evento al form
            //TIPOS DE EVETOS
            //onSUbmit, onClick

            //Este tipo de dormulrio es jsx
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-10">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                            placeholder="Buscador"></input>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                            value="Buscar"></input>
                    </div>
                </div>
            </form>
        );
    }
}
