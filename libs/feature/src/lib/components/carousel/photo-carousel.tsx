import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  IconButton,
  lighten,
  Theme,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type PhotoCarouselProps = {
  images: string[];
  color?: string;
  title: string;
};

const commonIconButtonStyles = (color: string, theme: Theme) => ({
  border: 'solid',
  borderWidth: '2px',
  color: color,
  height: theme.spacing(3),
  width: theme.spacing(3),
  '&:hover': {
    backgroundColor: lighten(color, 0.8),
  },
  marginRight: theme.spacing(2),
});

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  images,
  title,
  color = '#9034a2',
}) => {
  const totalImages = images.length;
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const visibleImagesCount = smDown
    ? 1
    : isTablet
    ? 3
    : Math.min(6, totalImages);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleImages = [...images, ...images, ...images];

  // Funções de controle de navegação
  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isAnimating]);

  const handlePrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [isAnimating]);

  const stopAutoMove = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: smDown ? '100%' : '80%',
        maxWidth: smDown ? '100%' : 1200,
        margin: 'auto',
        overflow: 'hidden',
        padding: smDown ? theme.spacing(1) : 0,
        height: 'auto',
      }}
    >
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: theme.spacing(2),
          marginBottom: smDown ? 'auto' : theme.spacing(6),
        }}
      >
        <Typography
          variant={smDown ? 'h6' : 'h5'}
          sx={{
            fontWeight: smDown ? 700 : 900,
            maxWidth: theme.spacing(50),
            fontSize: smDown ? theme.spacing(2.2) : 'auto',
          }}
        >
          {title}
        </Typography>

        {/* Controles de navegação */}
        {!smDown && (
          <Box component="nav" aria-label="carousel navigation">
            <IconButton
              onClick={() => {
                handlePrevious();
                stopAutoMove();
              }}
              sx={{
                ...commonIconButtonStyles(color, theme),
              }}
            >
              <ArrowBackIosNewIcon
                sx={{ height: theme.spacing(1.4), width: theme.spacing(1.4) }}
              />
            </IconButton>

            <IconButton
              onClick={() => {
                handleNext();
                stopAutoMove();
              }}
              sx={{
                ...commonIconButtonStyles(color, theme),
              }}
            >
              <ArrowForwardIosIcon
                sx={{ height: theme.spacing(1.4), width: theme.spacing(1.4) }}
              />
            </IconButton>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none',
          transform: `translateX(-${
            (currentIndex % totalImages) * (100 / visibleImagesCount)
          }%)`,
        }}
      >
        {visibleImages.map((image, index) => (
          <Box
            component="img"
            src={image}
            key={index}
            alt={`Image ${currentIndex + 1 + index}`}
            sx={{
              width: `${100 / visibleImagesCount}%`,
              maxHeight: smDown ? theme.spacing(20) : theme.spacing(18),
              margin: smDown ? theme.spacing(1) : theme.spacing(2),
              display: 'block',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateZ(0)',
              '&:hover': {
                transform: smDown ? 'scale(1)' : 'scale(1.1)',
                boxShadow: smDown ? 'none' : '0 10px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
