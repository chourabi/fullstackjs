import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bloc from './component/Bloc';
import Jaime from './component/Jaime';
import Article from './component/Article';
import MyForm from './component/MyForm';
import SearchEngine from './component/SearchEngine';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import ErrorPage from './pages/NotFount';
import Movie from './pages/Movie';


class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      home:Home
    }

    
  }

  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          
          
          
          <Route path="/about" component={About} exact/>
          <Route path="/user/:id"  component={Users}  exact/>
          <Route path="/movie/:id"  component={Movie}  exact/>
          
          <Route path="/" component={this.state.home} exact />
          <Route component={ErrorPage} exact />
          
        </Switch>
      </div>
    </Router>
    );
  }

}

export default App;
