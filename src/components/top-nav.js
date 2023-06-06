import PropTypes from 'prop-types';
/* import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'; */
import {
  Avatar,
  Badge,
  Box,
  Card,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
/* import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from './account-popover'; */

const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 64;

export const TopNav = () => {
    const theme = useTheme()
 /*  const { onNavOpen } = props; */
 // const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
 

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'fixed',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`, 
            md: 400, 
            sm:740,
            xm: 1000

          },

          zIndex:8888/* (theme) => theme.zIndex.appBar */
        }}  
        
      >
        <Stack
          alignItems="start"
          justifyContent="flex-end"
          direction="row"
          
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
           <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
        
     testssssssssssssssss
          </Stack> 
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Tooltip title="Contacts">
              <IconButton>
            
              </IconButton>
            </Tooltip>
       
    
          </Stack>
        </Stack>
   
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
