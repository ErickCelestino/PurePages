import { Button, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactElement } from 'react';

interface CtaButtonProps {
  title?: string;
  fontSize?: number;
  action: () => void;
  iconRight?: ReactElement;
  iconLeft?: ReactElement;
  width?: number;
}

export const CtaButton: FC<CtaButtonProps> = ({
  action,
  iconRight,
  iconLeft,
  fontSize = 12,
  width,
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
        width: width ? theme.spacing(width) : 'auto',
      }}
      onClick={action}
      endIcon={iconRight}
      startIcon={iconLeft}
    >
      {title}
    </Button>
  );
};
