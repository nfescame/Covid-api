import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBarComponemt(props) {
  const { title } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CoronavirusIcon
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </CoronavirusIcon>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
