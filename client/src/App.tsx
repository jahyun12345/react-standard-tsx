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


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

// function Login() {
//   return (
//       <div>
//           Login
//       </div>
//   )
// }

export default App;
