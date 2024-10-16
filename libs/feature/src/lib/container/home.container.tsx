import { Box } from '@mui/material';
import { SimpleHeader } from '../components';

export const HomeContainer = () => {
  return (
    <Box>
      <SimpleHeader
        listButtons={[
          {
            title: 'Teste',
            to: () => {
              console.log('teste');
            },
          },
        ]}
      />
    </Box>
  );
};
