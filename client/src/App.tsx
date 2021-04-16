// import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import NavBar from './components/views/NavBar/NavBar';
import Landing from './components/views/Landing/Landing';
import Register from './components/views/Register/Register';
import Login from './components/views/Login/Login';
// import Footer from './components/views/Footer/Footer';
import Auth from './hoc/auth';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(Landing, null)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
