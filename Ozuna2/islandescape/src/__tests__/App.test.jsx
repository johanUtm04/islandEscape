// src/__tests__/App.test.jsx

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Asegúrate de que la ruta a tu App.jsx sea correcta

test('renders main title', () => {
  // 1. Renderizar el componente
  render(<App />);

  // 2. Buscar un elemento que contenga un texto específico
  // Debes ajustar 'Island Escape' por un texto que exista en tu componente App
  const titleElement = screen.getByText(/Island Escape/i); 

  // 3. Aserción
  expect(titleElement).toBeInTheDocument();
});