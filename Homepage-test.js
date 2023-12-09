import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MagicEightBall from './Home';

describe('MagicEightBall Component', () => {
  test('renders MagicEightBall component', () => {
    const { getByText, getByLabelText } = render(<MagicEightBall />);
    
    // Check if the component renders
    const magicEightBallHeading = getByText(/Magic Eight Ball/i);
    expect(magicEightBallHeading).toBeInTheDocument();

    // Check if input and button are present
    const questionInput = getByLabelText(/Ask me a question:/i);
    expect(questionInput).toBeInTheDocument();

    const askButton = getByText(/Ask/i);
    expect(askButton).toBeInTheDocument();
  });

  test('generates response when asking a question', () => {
    const { getByLabelText, getByText } = render(<MagicEightBall />);
    
    // Type a question and click "Ask" button
    const questionInput = getByLabelText(/Ask me a question:/i);
    fireEvent.change(questionInput, { target: { value: 'Will it rain today?' } });

    const askButton = getByText(/Ask/i);
    fireEvent.click(askButton);

    // Check if response is generated
    const response = getByText(/Yes|No/i);
    expect(response).toBeInTheDocument();
  });

  test('displays message when asking an empty question', () => {
    const { getByLabelText, getByText } = render(<MagicEightBall />);
    
    // Click "Ask" button without typing a question
    const askButton = getByText(/Ask/i);
    fireEvent.click(askButton);

    // Check if error message is displayed
    const response = getByText(/Please ask a question/i);
    expect(response).toBeInTheDocument();
  });
});
