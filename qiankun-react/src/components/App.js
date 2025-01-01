// import logo from './logo.svg';
import './App.css';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path ="/react" component={About} />
    </Router>
  );
}

export default App;
