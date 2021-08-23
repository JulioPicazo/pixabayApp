import { Component } from 'react';
import { Buscador } from './components/Buscador'

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumpbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
           <Buscador/>
        </div>
      </div>
    );
  }
}

export default App;
