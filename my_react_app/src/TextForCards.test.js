import { render, screen } from '@testing-library/react';
import TextForCards from './TextForCards';

test('Text for Card Loads', () => {
    render(<TextForCards />);
    const linkElement = screen.getByText(/Text from card/i);
    expect(linkElement).toBeInTheDocument();
});

test('Text for Card Loads', () => {
    render(<TextForCards cardNum= {1}/>);
    const linkElement = screen.getByText(/card 1/i);
    expect(linkElement).toBeInTheDocument();
});
