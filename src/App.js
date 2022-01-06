import './App.css';
import Home from './Components/Home'
import About from './Components/About';
import { Route, NavLink, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className="nav">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
