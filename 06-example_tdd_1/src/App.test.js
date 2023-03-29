import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const setup= () => {
  render(<App/>);
  const title = screen.getByRole("heading", { name: /app counter/i});
  const btnIncrementar = screen.getByRole("button", { name: /incrementar/i});
  const btnDecrementar = screen.getByRole("button", { name: /decrementar/i });
  const btnReiniciar = screen.getByRole("button", { name: /reiniciar/i });
  return {
    title,
    btnIncrementar,
    btnDecrementar,
    btnReiniciar
  }
}

describe("Renderizado del componente app", ()=> {
  test("El titulo debe ser App counter", () => {
    const { title } = setup();
    expect(title).toBeInTheDocument();
  });

  test("El contador debe iniciar en 0", ()=> {
    setup();
    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();
  });

  test("Mostrar botones incrementar, decrementar y reiniciar", () => {
    const { btnIncrementar, btnDecrementar, btnReiniciar } = setup();
    expect(btnIncrementar).toBeInTheDocument();
    expect(btnDecrementar).toBeInTheDocument();
    expect(btnReiniciar).toBeInTheDocument();
  })
});

describe("Funcionalidad de los botones incrementar, decrementar y reiniciar", () => {
  test("Incrementar, decrementar y reiniciar contador", () => {
    const { btnIncrementar, btnDecrementar, btnReiniciar } = setup();
    for(let i = 0; i <= 5; i++) {
      let er = new RegExp('contador: '+i, 'i')
      expect(screen.getByText(er)).toBeInTheDocument();
      fireEvent.click(btnIncrementar);
    }
    for(let i = 6; i >= 4; i--) {
      let er = new RegExp('contador: '+i, 'i')
      expect(screen.getByText(er)).toBeInTheDocument();
      fireEvent.click(btnDecrementar);
    }
    expect(screen.getByText(/contador: 3/i)).toBeInTheDocument();
    fireEvent.click(btnReiniciar);
    expect(screen.getByText(/contador: 0/i)).toBeInTheDocument();
  });
})
