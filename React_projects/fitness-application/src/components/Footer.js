import React from 'react';
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

function Footer() {
    return (
        <Stack mt="80px" bgcolor="#fff3f4" gap="40px" alignItems="center" px="40px" pt="24px">
  <img src={Logo} alt="logo" width="200px" height="40px"/>
        </Stack>
    );
}

export default Footer;