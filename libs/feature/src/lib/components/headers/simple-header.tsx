import { FC } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  Box,
} from '@mui/material';
import { ButtonNavigation } from '../../shared';

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
  return (
    <AppBar id="home" position="static">
      <Toolbar>
        <img
          width={theme.spacing(8)}
          height={theme.spacing(8)}
          src={logo}
          alt={logoAltTitle}
        />
        {title ? (
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
        ) : (
          <Box style={{ flexGrow: 1 }}></Box>
        )}
        <Box marginRight={theme.spacing(3)}>
          {listButtons &&
            listButtons.map((button) => (
              <Button
                color="inherit"
                onClick={button.to}
                sx={{ textTransform: 'none' }}
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
          }}
          onClick={ctaButton}
        >
          {ctaButtonTitle}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
