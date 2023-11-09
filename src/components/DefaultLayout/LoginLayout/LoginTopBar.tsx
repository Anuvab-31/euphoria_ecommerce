import React from 'react'
import { AppBar, Box, Toolbar, } from '@mui/material'


const LoginTopBar = () => {
  return (
    <AppBar elevation={1} style={{ background: "#ffffff" }}>
      <Toolbar>
        <img src={'/Icons/Logo.png'} />

        <Box flexGrow={1} />

      </Toolbar>
    </AppBar>
  )
}

export default LoginTopBar