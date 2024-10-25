import {
  Box,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { IconNavigation, LinkText } from '../../shared';
import { FC } from 'react';

interface SimpleFooterProps {
  copyrightText?: string;
  icons: IconNavigation[];
  links: LinkText[];
  colorMobile?: string;
  colorTablet?: string;
}

export const SimpleFooter: FC<SimpleFooterProps> = ({
  icons,
  links,
  copyrightText = 'Todos os direitos reservados.',
  colorMobile,
  colorTablet,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: smDown ? 'column' : 'row',
        fontSize: theme.spacing(1.5),
        background: smDown ? colorMobile : mdDown ? colorTablet : 'auto',
      }}
    >
      {mdDown && !smDown && (
        <Box sx={{ display: 'flex' }}>
          {icons.slice(0, 2).map((icon) => (
            <IconButton key={icon.to} href={icon.to} color="inherit">
              {icon.icon}
            </IconButton>
          ))}
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{ color: smDown && colorMobile ? 'white' : '' }}
          variant="body2"
        >
          © {new Date().getFullYear()} {copyrightText}
        </Typography>
        <Box
          sx={{
            marginLeft: theme.spacing(2),
          }}
        >
          {smDown
            ? links.slice(0, 1).map((link) => (
                <Link
                  key={link.text}
                  sx={{ color: colorMobile ? 'white' : '' }}
                  fontSize={smDown ? theme.spacing(1) : 'auto'}
                  ml={theme.spacing(1)}
                  href={link.to}
                >
                  {link.text}
                </Link>
              ))
            : links.map((link) => (
                <Link
                  key={link.text}
                  fontSize={smDown ? theme.spacing(1) : 'auto'}
                  ml={theme.spacing(1)}
                  href={link.to}
                >
                  {link.text}
                </Link>
              ))}
        </Box>
      </Box>
      {(!mdDown || smDown) && (
        <Box sx={{ display: 'flex' }}>
          {icons.map((icon) => (
            <IconButton key={icon.to} href={icon.to}>
              {icon.icon}
            </IconButton>
          ))}
        </Box>
      )}
    </Box>
  );
};
