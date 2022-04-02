import { render, screen } from '@testing-library/react';
import CustomCard from '../components/CustomCard';
import Carousel from '../components/Carousel';

test('renders question card', () => {
  render(<CustomCard question = "random question" ></CustomCard>);
  const linkElement = screen.getByText(/random question/);
  expect(linkElement).toBeInTheDocument();
});

test('renders assessment-end card', () => {
    render(<CustomCardEnd >End assessment?</CustomCardEnd>);
    const linkElement = screen.getByText(/End assessment/);
    expect(linkElement).toBeInTheDocument();
  });

  
test('renders the carousel component that questions are held on', () => {
    render(<Carousel>Cards go here</Carousel>);
    const linkElement = screen.getByText(/Cards go here/);
    expect(linkElement).toBeInTheDocument();
});
  
