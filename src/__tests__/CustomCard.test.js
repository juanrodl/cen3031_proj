import { render, screen } from '@testing-library/react';
import CustomCard from '../components/CustomCard';
import CustomCardEnd from '../components/CustomCardEnd';
import Carousel from '../components/Carousel';
import { data } from '../data/data';

/**test('renders question card', () => {
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
    render(<Carousel cards= {data}>Cards go here</Carousel>);
    const linkElement = screen.getByText(/Cards go here/);
    expect(linkElement).toBeInTheDocument();
});*/
  
