import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const SimpleHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Landing Page Title
        </Typography>
        <Button color="inherit" href="#features">
          Features
        </Button>
        <Button color="inherit" href="#cta">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};
