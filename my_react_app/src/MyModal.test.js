import { render, screen } from '@testing-library/react';
import MyModal from './MyModal';

test('Modal Loads', () => {
    render(<MyModal />);
    const linkElement = screen.getByText(/wholesome content/i);
    expect(linkElement).toBeInTheDocument();
});
