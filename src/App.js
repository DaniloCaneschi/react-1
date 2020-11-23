import './App.css';
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <UsuarioEntrada/>
          <UsuarioSaida
              login={"Danilo Caneschi"}>
          </UsuarioSaida>
        </header>

      </div>
  );
}

export default App;
