import {
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { FaqText } from '../../shared';
import { FC, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SimpleFaqProps {
  title: string;
  subTitle?: string;
  list: FaqText[];
}

export const SimpleFaq: FC<SimpleFaqProps> = ({ title, subTitle, list }) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = (id: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(id)
        ? prevExpanded.filter((itemId) => itemId !== id)
        : [...prevExpanded, id]
    );
  };

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));

  return (
    <Box
      component="section"
      id="faq-section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: theme.spacing(3),
        mt: theme.spacing(3),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: smDown ? '97%' : mdDown ? '70%' : '50%',
          mb: smDown ? theme.spacing(5) : theme.spacing(3),
        }}
      >
        <Typography
          mb={smDown ? theme.spacing(5) : theme.spacing(2)}
          variant="h5"
          fontWeight={800}
        >
          {title}
        </Typography>
        {subTitle && <Typography variant="body2">{subTitle}</Typography>}
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: smDown ? '90%' : mdDown ? '70%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {list.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded.includes(item.id)}
            onChange={() => handleToggle(item.id)}
            sx={{
              width: '100%',
            }}
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
    </Box>
  );
};
