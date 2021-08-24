import { Component } from 'react';
import { Buscador } from './components/Buscador'

class App extends Component {

  datosBusqueda = (termnino) =>{
    console.log(termnino);
  }

  render() {
    return (
      <div className="app container">
        <div className="jumpbotron">
          <p className="lead text-center">Buscador de Imagenes</p>

            <Buscador datosBusqueda={this.datosBusqueda} />
           
        </div>
      </div>
    );
  }
}

export default App;
