import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import about from './pages/about';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Page404 from './pages/Page404';
import { RegisterComponent } from './pages/register';
import Login from './pages/Login';
import Logout from './pages/Logout';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={about}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/register" component={RegisterComponent}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);
export default App;