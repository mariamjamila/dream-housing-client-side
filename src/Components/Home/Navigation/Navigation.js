import { AppBar, Toolbar, Typography, Button} from "@mui/material";
import { Box, margin } from "@mui/system";
import React from "react";
import { Link, NavLink} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../Firebase/Hooks/useAuth";

const Navigation = () => {
  const{user, logOut} = useAuth()
  return (

    <AppBar color="inherit" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{textDecoration:'none'}} component={Link} to="/home" >
              Dream Housing
            </Typography>
          </Box>
        
            <Button component={Link} to="/allhouses" >All Houses</Button>

            { user?.email?
          <>
            <Button component={Link} to="/dashboard">Dashboard</Button>
            
            <Button onClick={logOut}> Log Out</Button>
          </>
            
          :
          <>
          <Button component={Link} to="/login">Login</Button>
          <Button component={Link}  to="/register">Register</Button>
          </>
          }
          
        </Toolbar>
    </AppBar>
    
  );
};

export default Navigation;
