import { FC } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  Box,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonNavigation } from '../../shared';
import { useDrawerContext } from '../../contexts';
import { scrollTo } from '../../services';
import { CtaButton } from '../button';

interface SimpleHeaderProps {
  title?: string;
  logo: string;
  logoAltTitle?: string;
  listButtons: ButtonNavigation[];
  ctaButton?: () => void;
  ctaButtonTitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({
  title,
  logoAltTitle = 'Logo da Empresa',
  ctaButtonTitle,
  logo,
  listButtons,
  ctaButton,
  backgroundColor,
  textColor,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <AppBar
      sx={{
        background: backgroundColor,
        color: textColor,
      }}
      id="home"
      position="static"
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar sx={{ width: '87%' }}>
          <IconButton
            onClick={() => scrollTo('home')}
            sx={{
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component="img"
              width={theme.spacing(7)}
              height={theme.spacing(7)}
              src={logo}
              alt={logoAltTitle}
            />
          </IconButton>
          {title ? (
            <Typography
              variant="h6"
              textOverflow="ellipsis"
              overflow="hidden"
              noWrap
              component="div"
              fontSize={
                smDown
                  ? theme.spacing(2)
                  : mdDown
                  ? theme.spacing(1.8)
                  : theme.spacing(3)
              }
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
          ) : (
            <Box style={{ flexGrow: 1 }}></Box>
          )}
          {smDown ? (
            <IconButton color="inherit" onClick={toggleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                }}
              >
                {listButtons &&
                  listButtons.map((button) => (
                    <Button
                      color="inherit"
                      onClick={button.to}
                      key={button.title}
                      sx={{
                        textTransform: 'none',
                        fontSize: smDown
                          ? theme.spacing(1.5)
                          : mdDown
                          ? theme.spacing(1.6)
                          : theme.spacing(2),
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
                      {button.title}
                    </Button>
                  ))}
              </Box>
              {ctaButton && (
                <Box
                  sx={{
                    marginRight: mdDown ? theme.spacing(2) : '',
                  }}
                >
                  <CtaButton action={ctaButton} title={ctaButtonTitle} />
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
