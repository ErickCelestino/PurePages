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
}

export const SimpleFooter: FC<SimpleFooterProps> = ({
  icons,
  links,
  copyrightText = 'Todos os direitos reservados.',
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        p: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: theme.spacing(1.5),
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} {copyrightText}
        </Typography>
        {!smDown && (
          <Box
            sx={{
              marginLeft: theme.spacing(2),
            }}
          >
            {links.map((link) => (
              <Link ml={theme.spacing(1)} href={link.to}>
                {link.text}
              </Link>
            ))}
          </Box>
        )}
      </Box>
      <Box sx={{ display: 'flex' }}>
        {icons.map((icon) => (
          <IconButton href={icon.to} color="inherit">
            {icon.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
