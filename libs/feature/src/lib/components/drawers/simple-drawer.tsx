import { useDrawerContext } from '../../context';
import { DrawerHeader } from './drawer-header';
import { DrawerListItem } from './drawer-list';
import { FC, ReactNode } from 'react';
import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import { Box, List, CssBaseline, Divider, useMediaQuery } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CtaButton } from '../button';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(theme.breakpoints.up('sm') && {
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
}));

interface SimpleDrawerProps {
  children: ReactNode;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  drawerBackground?: string;
  drawerColor?: string;
}

export const SimpleDrawer: FC<SimpleDrawerProps> = ({
  children,
  ctaButton,
  ctaButtonTitle,
  drawerBackground = '#303134',
  drawerColor = 'white',
}) => {
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {Object.keys(drawerOptions).length > 0 && (
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleDrawerOpen}
          anchor="right"
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: drawerBackground,
              color: drawerColor,
            },
          }}
        >
          <DrawerHeader
            drawerColor={drawerColor}
            open={isDrawerOpen}
            handleDrawerClose={toggleDrawerOpen}
          />
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: theme.spacing(1.5),
            }}
          >
            <CtaButton action={ctaButton} title={ctaButtonTitle} />
          </Box>
          <List component="nav">
            <DrawerListItem
              items={drawerOptions}
              open={isDrawerOpen}
              onClick={smDown ? toggleDrawerOpen : undefined}
              drawerColor={drawerColor}
            />
          </List>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};
