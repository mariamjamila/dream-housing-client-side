import { Box } from '@mui/system';
import {Container} from '@mui/material';
import {palette} from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'lightgrey'}}>
            <Container sx={{padding:10}}>
                &copy; Mariam Jamila 2021
            </Container>
        </Box>
    );
};

export default Footer;