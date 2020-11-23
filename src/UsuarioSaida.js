import React, {Component} from 'react';

class UsuarioSaida extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ""
    }
  }

  render() {
    return (
        <div className="fundoUsuarioSaida">
          <div>
            <h3>Login: {this.props.login}</h3>
            <h5>Passado via props</h5>
            <p>“A maior recompensa pelo trabalho não é o que a pessoa ganha, é o que ela se torna através dele”</p>
          </div>
        </div>
    );
  }
}

export default UsuarioSaida;
