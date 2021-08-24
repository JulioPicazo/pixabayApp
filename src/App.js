import { Component } from 'react';
import { Buscador } from './components/Buscador'

class App extends Component {


  state = {
    termnino : 'Busqueda'
  }

  datosBusqueda = (termnino) => {
    this.setState({termnino})
    //console.log(termnino);
  }

  render() {
    return (
      <div className="app container">
        <div className="jumpbotron">
          <p className="lead text-center">Buscador de Imagenes</p>

            <Buscador datosBusqueda={this.datosBusqueda} />
           
        </div>
        <h1>Datos a buscar: {this.state.termnino}</h1>
      </div>
    );
  }
}

export default App;
