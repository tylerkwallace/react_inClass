import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('Card Loads', () => {
    render(<Cards />);
    const linkElement = screen.getByText(/First Card/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads fade one true', () => {
    render(<Cards fade1={true} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads fade two true', () => {
    render(<Cards fade2={true} />);
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads fade one and two true', () => {
    render(<Cards fade1={true} fade2={true} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByText(/2/i);
    expect(linkElement2).toBeInTheDocument();
});
