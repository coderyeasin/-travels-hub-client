import AuthProvider from './Context/AuthProvider';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Home/Footer/Footer';
import Package from './Pages/Home/Package/Package';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/package"><Package></Package></Route>
          <Route path="/register"><Register></Register></Route>
          <Route path="/login"><Login></Login> </Route>
          
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
