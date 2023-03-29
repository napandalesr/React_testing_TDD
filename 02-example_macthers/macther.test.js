const { electrodomesticos, electrodomesticos_copia } = require("./constantes");

test("Comparar valores primitivos", ()=> {
  expect(2+2).toBe(4);
  expect(electrodomesticos[2].cocina[1]).toBe("Microondas");
});

test('Comparar todas las propiedades e instancias de un objeto', ()=> {
  expect(electrodomesticos).toEqual(electrodomesticos_copia);
  expect(electrodomesticos[1].lavadores_secadoras).toEqual(electrodomesticos_copia[1].lavadores_secadoras);
});


test('Comparar con expresiones regulares', ()=> {
  expect(electrodomesticos[1].lavadores_secadoras[1]).toMatch(/seCaDorAs/i);
});

test('Comparar longitud', () => {
  expect([1,2,3]).toHaveLength(3);
  expect(electrodomesticos).toHaveLength(3);
  expect(electrodomesticos[0].refrigeracion).toHaveLength(5);
  expect("abcd").toHaveLength(4);
});

test('Verificar que el número ingresado sea mayor que el comparado', () => {
  const numero_ingresado = 12;
  const numero_comparado = 10
  expect(numero_ingresado).toBeGreaterThan(numero_comparado);
});

test('Verificar que el número ingresado sea mayor o igual que el comparado', ()=> {
  let numero_ingresado = 12;
  let numero_comparado = 10
  expect(numero_ingresado).toBeGreaterThanOrEqual(numero_comparado);
  numero_ingresado = 8;
  numero_comparado = 8;
  expect(numero_ingresado).toBeGreaterThanOrEqual(numero_comparado);
});

test('Verificar que el número ingresado sea menor que el comparado', () => {
  const numero_ingresado = 10;
  const numero_comparado = 12
  expect(numero_ingresado).toBeLessThan(numero_comparado);
});

test('Verificar que el número ingresado sea menor o igual que el comparado', ()=> {
  let numero_ingresado = 10;
  let numero_comparado = 12
  expect(numero_ingresado).toBeLessThanOrEqual(numero_comparado);
  numero_ingresado = 8;
  numero_comparado = 8;
  expect(numero_ingresado).toBeLessThanOrEqual(numero_comparado);
});

test('Comparar decimales', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('Verificar que una función simulada ha sido llamada por lo menos una vez', () => {
  const funcion = jest.fn();
  funcion();
  expect(funcion).toHaveBeenCalled();
});

test('Verificar que una función simulada ha sido llamada una cantidad específica de veces', () => {
  const funcion = jest.fn();
  funcion();
  funcion();
  funcion();
  expect(funcion).toHaveBeenCalledTimes(3);
})

test('Verificar que una función simulada se haya llamado con argumentos espefícifos', () => {
  const funcion = jest.fn((a, b)=>{});
  funcion("Hola", "Mundo");
  expect(funcion).toHaveBeenCalledWith("Hola", "Mundo");
  funcion(1, 3);
  expect(funcion).toHaveBeenCalledWith(1, 3);
})





