import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

// Testcases written to check if the component Contact Us is successfully loaded into the DOM after getting rendered or not.

describe('Contact Us component test cases', () => {
  it('Should Load Contact Us Component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  describe('Contact Us form test cases', () => {
    test('Should Load Buttons', () => {
      render(<Contact />);

      const button = screen.getByText('Submit');
      expect(button).toBeInTheDocument();
    });

    test('Should Load all inputs', () => {
      render(<Contact />);

      const inputs = screen.getAllByRole('textbox');
      expect(inputs).toHaveLength(2);
    });
  });
});
