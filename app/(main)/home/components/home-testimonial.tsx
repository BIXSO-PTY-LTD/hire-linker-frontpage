import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';

import { Carousel, CarouselArrows } from '#shared/components/carousel';
import { useCarousel } from '#shared/hooks';
import { ITestimonialProps } from '#shared/typescript/testimonial';
import { TestimonialItemContent, TestimonialItemThumbnail } from './home-testimonial-item';

type T_HomeTestimonialProps = {
    testimonials: ITestimonialProps[];
};

export default function HomeTestimonial({ testimonials }: T_HomeTestimonialProps) {
    const theme = useTheme();

    const carouselLarge = useCarousel({
        slidesToShow: 1,
        draggable: false,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    const carouselThumb = useCarousel({
        autoplay: true,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        centerPadding: '0px',
        rtl: Boolean(theme.direction === 'rtl'),

        responsive: [
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    useEffect(() => {
        carouselLarge.onSetNav();
        carouselThumb.onSetNav();
    }, [carouselLarge, carouselThumb]);

    return (
        <Box
            sx={{
                bgcolor: 'background.neutral',
                textAlign: 'center',
                overflow: 'hidden',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container sx={{ position: 'relative' }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid xs={12} md={6}>
                        <Typography variant="h2" sx={{ mb: 5 }}>
                            What Our Customer Say
                        </Typography>

                        <CarouselArrows
                            onNext={carouselThumb.onNext}
                            onPrev={carouselThumb.onPrev}
                            leftButtonProps={{
                                sx: { display: { xs: 'none', md: 'inline-flex' } },
                            }}
                            rightButtonProps={{
                                sx: { display: { xs: 'none', md: 'inline-flex' } },
                            }}
                        >
                            <Carousel
                                {...carouselLarge.carouselSettings}
                                asNavFor={carouselThumb.nav}
                                ref={carouselLarge.carouselRef}
                            >
                                {testimonials.map((testimonial) => (
                                    <TestimonialItemContent key={testimonial.id} testimonial={testimonial} />
                                ))}
                            </Carousel>

                            <Box sx={{ mb: 3, mx: 'auto', maxWidth: { xs: 360, sm: 420 } }}>
                                <Carousel
                                    {...carouselThumb.carouselSettings}
                                    asNavFor={carouselLarge.nav}
                                    ref={carouselThumb.carouselRef}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <TestimonialItemThumbnail
                                            key={testimonial.id}
                                            testimonial={testimonial}
                                            selected={carouselLarge.currentIndex === index}
                                        />
                                    ))}
                                </Carousel>
                            </Box>
                        </CarouselArrows>

                        {testimonials.map(
                            (testimonial, index) =>
                                carouselLarge.currentIndex === index && (
                                    <Stack key={testimonial.id} spacing={0.5}>
                                        <Typography variant="h6">{testimonial.name}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {testimonial.role}
                                        </Typography>
                                    </Stack>
                                ),
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
