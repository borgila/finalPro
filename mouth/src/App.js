import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import SearchPlayer from "./components/contents/Search/SearchPlayer";
import MyTeam from "./components/contents/MyTeam/MyTeam";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no

    //si no estás logeado, mostrar opcionalmente o login o signup
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            <Switch>
              <Route
                exact
                path="/signup"
                render={() => (
                  <Signup
                    getUser={this.getUser}
                    userInSession={this.state.loggedInUser}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                render={() => (
                  <Login
                    getUser={this.getUser}
                    userInSession={this.state.loggedInUser}
                  />
                )}
              />
              <Route exact path="/" render={() => <SearchPlayer />} />
              <Route exact path="/myTeam" render={() => <MyTeam />} />
              {/* <Route exact path="/comparePlayer" render={() => <ComparePlayer />} />  */}
            </Switch>
            {/* FOOTER */}
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
