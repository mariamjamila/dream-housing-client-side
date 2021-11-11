import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home.js';
import About from './Components/Home/About/About';
import Users from './Components/Users/Users/Users';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';
import Navigation from './Components/Home/Navigation/Navigation';
import Footer from './Components/Home/Footer/Footer';
import AllHouses from './Components/Home/AllHouses/AllHouses';
import Purchase from './Components/Purchase/Purchase';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
   <Navigation/>
      <Switch>
   <Route exact path="/">
       <Home />
     </Route>
     <Route exact path="/about">
       <About />
     </Route>
     <Route exact path="/users">
       <Users />
     </Route>
     <Route exact path="/home">
       <Home />
     </Route>
     <Route exact path="/login">
       <Login />
     </Route>
     <Route exact path="/register">
       <Register />
     </Route>
     <Route exact path="/allhouses">
     <AllHouses></AllHouses>
     </Route>
     <Route exact path="/purchase/:id">
       <Purchase></Purchase>
     </Route>
     
   </Switch>
   <Route  path="/footer">
       <Footer />
     </Route>
</Router>
      </AuthProvider>
    </div>
  );
}

export default App;
