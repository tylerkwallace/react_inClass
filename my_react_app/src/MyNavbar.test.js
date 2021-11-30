import { render, screen } from '@testing-library/react';
import MyNavBar from './MyNavBar';

test('Navbar Loads', () => {
    render(<MyNavBar />);
    const linkElement = screen.getByText(/My react app/i);
    expect(linkElement).toBeInTheDocument();
});
