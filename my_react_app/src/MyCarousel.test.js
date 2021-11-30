import { render, screen } from '@testing-library/react';
import MyCarousel from './MyCarousel';

test('Carousel Loads', () => {
    render(<MyCarousel />);
    const linkElement = screen.getByText(/Slide 1/i);
    expect(linkElement).toBeInTheDocument();
});
