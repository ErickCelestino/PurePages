import { Button, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

interface CtaButtonProps {
  title?: string;
  fontSize?: string;
  action: () => void;
}

export const CtaButton: FC<CtaButtonProps> = ({
  action,
  fontSize = '12',
  title = 'Contrate Agora',
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        borderRadius: '90px',
        whiteSpace: 'nowrap',
        textTransform: 'none',
        fontSize: fontSize,
        marginRight: mdDown ? theme.spacing(-1) : 'auto',
      }}
      onClick={action}
    >
      {title}
    </Button>
  );
};
