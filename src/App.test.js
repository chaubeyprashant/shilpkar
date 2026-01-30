import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shilpi pandey brand name', () => {
  render(<App />);
  const elements = screen.getAllByText(/SHILPI PANDEY/i);
  expect(elements.length).toBeGreaterThan(0);
});
