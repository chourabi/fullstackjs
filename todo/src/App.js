import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';


class App extends React.Component {

  constructor(props){
    super(props);
  }



  render(){
    return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home" >Home</Link>
            </li>
            <li>
              <Link to="/add" >add</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/"  component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/add" component={Add} exact/>

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
