import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Top 10 Hacker News/i);
  expect(linkElement).toBeInTheDocument();
});
