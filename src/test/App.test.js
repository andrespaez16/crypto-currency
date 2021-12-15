import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const component= render(<App/>)
  console.log(component,'contenido de render') 
});
