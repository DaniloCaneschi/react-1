import React, {Component} from 'react';

class UsuarioEntrada extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ""
    }
  }

  render() {
    return (
        <div className="fundoUsuarioEntrada">
          <input onChange={(e) => this.setState({login: e.target.value})}/>

          <div>
            <h3>Valor digitado acima: {this.state.login}</h3>
            <h5>Via setState através do input no event onChange</h5>
          </div>
        </div>
    );
  }
}

export default UsuarioEntrada;
