import { Button, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

interface CtaButtonProps {
  title?: string;
  action: () => void;
}

export const CtaButton: FC<CtaButtonProps> = ({
  action,
  title = 'Contrate Agora',
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
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
      onClick={action}
    >
      {title}
    </Button>
  );
};
