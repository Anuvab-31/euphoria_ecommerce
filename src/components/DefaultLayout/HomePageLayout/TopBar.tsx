import React, { useState } from 'react'
import { TopBarProps } from '../../../utils/AllProps'
import { AppBar, Box, IconButton, InputAdornment, TextField, Toolbar, useMediaQuery } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  textfieldProperty: {
    background: '#F6F6F6',
    paddingLeft: '10px',
    borderRadius: '6px',
    border: "4px solid #C7C7C7",
  }
}));

const TopBar: React.FC<TopBarProps> = ({ onMobileNavOpen, menuContents }) => {

  const classes = useStyles();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.only('sm'));
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const [query, setQuery] = useState('');

  return (
    <AppBar elevation={1} style={{ background: "#ffffff" }}>
      <Toolbar>
        {
          desktop ? "" :
            <IconButton
              onClick={onMobileNavOpen}
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: "#07484A" }} />
            </IconButton>
        }

        <img src={'/Icons/Logo.png'} />

        <Box flexGrow={1} />

        {
          desktop ? <Box> {menuContents} </Box> : tablet ? "" : ''
        }

        <Box flexGrow={1} />
        <TextField
          value={query}
          onChange={(e: any) => { setQuery(e.target.value); }}
          placeholder='Search'
          // fullWidth
          variant="standard"
          sx={{ background: '#F6F6F6', paddingLeft: '10px', borderRadius: '6px' }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <img alt={'Image'} src={'/Icons/search.svg'} height={15} width={15} />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar