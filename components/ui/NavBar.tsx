import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

export const NavBar = () => {

  const { OpenSideMenu } = useContext(UIContext);

  return(
    <AppBar  position='sticky' >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          onClick={OpenSideMenu}
        >
          <MenuOutlinedIcon  />
        </IconButton>
        <Typography variant='h6' >Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
}