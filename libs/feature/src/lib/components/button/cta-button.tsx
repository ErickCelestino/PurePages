import { Button, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactElement } from 'react';

interface CtaButtonProps {
  title?: string;
  fontSize?: number;
  action: () => void;
  iconRight?: ReactElement;
  iconLeft?: ReactElement;
  width?: number;
  color?: string;
  titleColor?: string;
}

export const CtaButton: FC<CtaButtonProps> = ({
  action,
  iconRight,
  iconLeft,
  fontSize = 12,
  width,
  title = 'Contrate Agora',
  color = 'secondary',
  titleColor,
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: '90px',
        whiteSpace: 'nowrap',
        textTransform: 'none',
        fontSize: fontSize,
        marginRight: mdDown ? theme.spacing(-1) : 'auto',
        width: width ? theme.spacing(width) : 'auto',
        background:
          color === 'secondary' ? theme.palette.secondary.main : color,
        color: titleColor,
      }}
      onClick={action}
      endIcon={iconRight}
      startIcon={iconLeft}
    >
      {title}
    </Button>
  );
};
