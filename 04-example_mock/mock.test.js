test('Validar que una función simulada sea llamada por lo menos una vez', () => {
  const mock = jest.fn();
  mock();
  expect(mock).toHaveBeenCalled();
});

test('Retornar una variable con un mock', () => {
  const mock = jest.fn().mockReturnValueOnce(true);
  const result = mock();
  expect(result).toBe(true);
});

test('Retornar varias variables con un mock', () => {
  const mock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hola")
    .mockReturnValueOnce("Mundo");
  
  const result1 = mock();
  const result2 = mock();
  const result3 = mock();
  const result4 = mock();

  expect(result1).toBe(true);
  expect(result2).toBe(false);
  expect(result3).toBe("Hola");
  expect(result4).toBe("Mundo");
});

test('Realizar operaciones con un mock', () => {
  const mock = jest.fn(x => x * x);
  const result = mock(2);
  expect(result).toBe(4);
});