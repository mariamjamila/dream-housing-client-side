import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/Home/About/About";
import Users from "./Components/Users/Users/Users";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import Navigation from "./Components/Home/Navigation/Navigation";
import Footer from "./Components/Home/Footer/Footer";
import AllHouses from "./Components/Home/AllHouses/AllHouses";
import Purchase from "./Components/Purchase/Purchase";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./Components/Contexts/AuthProvider/PrivateRoute/PrivateRoute";
import { CssBaseline, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Toolbar />
          <Box sx={{flex:1}}>
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
              <PrivateRoute path="/dashboard">
                <DashBoard />
              </PrivateRoute>
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
              <PrivateRoute exact path="/purchase/:id">
                <Purchase></Purchase>
              </PrivateRoute>
            </Switch>
          </Box>
          
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
