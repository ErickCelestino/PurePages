import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  IconButton,
  lighten,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type PhotoCarouselProps = {
  images: string[];
  color?: string;
  title: string;
};

// Define common styles to be reused
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
  const visibleImagesCount = Math.min(6, totalImages);
  const theme = useTheme();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // State hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Duplicate images for smooth looping
  const visibleImages = [...images, ...images, ...images];

  // Handler for moving to the next image
  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isAnimating]);

  // Handler for moving to the previous image
  const handlePrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [isAnimating]);

  // Stop automatic movement of the carousel
  const stopAutoMove = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // Start automatic movement of the carousel
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

  // Control animation state
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
        width: '80%',
        maxWidth: 1200,
        margin: 'auto',
        overflow: 'hidden',
        height: 'auto',
      }}
    >
      {/* Header for title and controls */}
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: theme.spacing(2),
          marginBottom: theme.spacing(6),
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            maxWidth: theme.spacing(50),
          }}
        >
          {title}
        </Typography>

        {/* Navigation controls */}
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
      </Box>

      {/* Carousel images */}
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
              maxHeight: theme.spacing(18),
              display: 'block',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateZ(0)',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              },
              marginBottom: theme.spacing(2),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
