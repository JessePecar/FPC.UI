
import './App.css';
import Landing from './Pages/Landing.jsx'
import Home from './Pages/Home.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className = "background-image h-full-vh">
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
