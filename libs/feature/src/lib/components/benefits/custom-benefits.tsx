import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { BenefitsItems } from '../../shared';

interface CustomBenefitsProps {
  title: string;
  background?: string;
  benefits: BenefitsItems[];
}

export const CustomBenefits: FC<CustomBenefitsProps> = ({
  title,
  benefits,
  background = '#FBFBFB',
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ background: background }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box mt={theme.spacing(5)}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, maxWidth: '80%', textAlign: 'center' }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', mt: theme.spacing(5) }}
        >
          <List>
            {benefits &&
              benefits.map((benefit) => (
                <ListItem
                  sx={{ display: 'flex', flexDirection: 'column' }}
                  key={benefit.id}
                >
                  <ListItemAvatar>
                    <Avatar src={benefit.image} />
                  </ListItemAvatar>
                  <ListItemText sx={{ fontWeight: 800 }}>
                    {benefit.title}
                  </ListItemText>
                  <ListItemText sx={{ maxWidth: '60%' }}>
                    {benefit.subTitle}
                  </ListItemText>
                  <ListItemButton>{benefit.buttonTitle}</ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
