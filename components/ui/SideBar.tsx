import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
const menuItems: string[] = ['Imbox', 'Jira', 'Gmail', 'Calendar', 'Settings'];

export const SideBar = () => {

  const { sidemenuOpone, CloseSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor="left"
      open={sidemenuOpone}
      onClose={CloseSideMenu}
    >
      <Box sx={{width: 250}} >
      <Box sx={{padding: '5px 10px'}} >
        <Typography variant='h4' >Menu</Typography>
        </Box>
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={item} >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                  
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={item} >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                  
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
      </Box>
      
      
    </Drawer>
  )
}
