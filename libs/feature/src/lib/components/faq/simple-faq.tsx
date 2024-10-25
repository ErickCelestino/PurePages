import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { FaqText } from '../../shared';
import { FC, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SimpleFaqProps {
  title: string;
  list: FaqText[];
}

export const SimpleFaq: FC<SimpleFaqProps> = ({ title, list }) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(id)
        ? prevExpanded.filter((itemId) => itemId !== id)
        : [...prevExpanded, id]
    );
  };
  return (
    <Box
      component="section"
      id="faq-section"
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Typography variant="h5">{title}</Typography>
      {list.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded.includes(item.id)}
          onChange={() => handleToggle(item.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
