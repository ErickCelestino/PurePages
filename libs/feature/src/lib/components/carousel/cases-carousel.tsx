import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

type CasesCarouselProps = {
  images: string[];
  color?: string;
  title: string;
};

export const CasesCarousel: FC<CasesCarouselProps> = ({
  images,
  title,
  color,
}) => {
  const totalImages = images.length;
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const visibleImagesCount = smDown
    ? 2
    : isTablet
    ? 3
    : Math.min(6, totalImages);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleImages = [...images, ...images, ...images];

  // Handler for moving to the next image
  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isAnimating]);

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
        width: smDown ? '100%' : '80%',
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
          marginBottom: smDown ? 'auto' : theme.spacing(6),
        }}
      >
        {/* Title */}
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
