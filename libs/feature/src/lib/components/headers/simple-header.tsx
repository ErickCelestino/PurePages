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
import { useNavigate } from 'react-router-dom';

interface SimpleHeaderProps {
  title?: string;
  logo: string;
  logoAltTitle?: string;
  listButtons: ButtonNavigation[];
  ctaButton: () => void;
  ctaButtonTitle?: string;
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({
  title,
  logoAltTitle = 'Logo da Empresa',
  ctaButtonTitle = 'Contrate Agora',
  logo,
  listButtons,
  ctaButton,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const visibleButtons = smDown
    ? listButtons.slice(0, 1)
    : mdDown
    ? listButtons.slice(0, 3)
    : listButtons;

  const navigate = useNavigate();
  return (
    <AppBar id="home" position="static">
      <Toolbar>
        <img
          width={theme.spacing(8)}
          height={theme.spacing(8)}
          src={logo}
          alt={logoAltTitle}
          onClick={() => {
            navigate('/');
          }}
        />
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
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Box
              marginRight={
                smDown
                  ? theme.spacing(-0.5)
                  : mdDown
                  ? theme.spacing(0)
                  : theme.spacing(3)
              }
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
              }}
            >
              {visibleButtons &&
                visibleButtons.map((button) => (
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
                    }}
                  >
                    {button.title}
                  </Button>
                ))}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: '90px',
                whiteSpace: 'nowrap',
                fontSize: smDown
                  ? theme.spacing(1.5)
                  : mdDown
                  ? theme.spacing(1.6)
                  : theme.spacing(2),
                marginRight: mdDown ? theme.spacing(-1) : 'auto',
              }}
              onClick={ctaButton}
            >
              {ctaButtonTitle}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
