import { FC } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ButtonNavigation } from '../../shared';

interface SimpleHeaderProps {
  title?: string;
  listButtons: ButtonNavigation[];
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({
  title = 'Minha Empresa',
  listButtons,
}) => {
  return (
    <AppBar id="home" position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {listButtons &&
          listButtons.map((button) => (
            <Button color="inherit" onClick={button.to}>
              {button.title}
            </Button>
          ))}
      </Toolbar>
    </AppBar>
  );
};
