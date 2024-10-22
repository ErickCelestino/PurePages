import React, { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type PhotoCarouselProps = {
  images: string[];
  color?: string;
  title: string;
};

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  images,
  title,
  color = '#9034a2',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const visibleImagesCount = Math.min(4, totalImages);
  const theme = useTheme();

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + visibleImagesCount
  );

  if (visibleImages.length < visibleImagesCount) {
    visibleImages.push(
      ...images.slice(0, visibleImagesCount - visibleImages.length)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

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
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            maxWidth: theme.spacing(60),
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              border: 'solid',
              borderWidth: '2px',
              color: color,
              marginRight: theme.spacing(2),
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <ArrowBackIosNewIcon
              sx={{ height: theme.spacing(1.5), width: theme.spacing(1.5) }}
            />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              border: 'solid',
              borderWidth: '2px',
              color: color,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <ArrowForwardIosIcon
              sx={{ height: theme.spacing(1.5), width: theme.spacing(1.5) }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${
            currentIndex * (100 / visibleImagesCount)
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
              maxHeight: theme.spacing(25),
              display: 'block',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
