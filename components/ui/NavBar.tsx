import { useContext } from 'react';
import NextLink from 'next/link';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
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
        <NextLink href='/' passHref>
          <Link sx={{color: 'white'}} underline='none' >
            <Typography variant='h6' >Open Jira</Typography>
          </Link>
        </NextLink>
          
      </Toolbar>
    </AppBar>
  );
}