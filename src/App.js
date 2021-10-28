import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
