beforeAll(() => console.log("beforeAll - Se ejecuta antes de todos los test"));
afterAll(() => console.log("afterAll - Se ejecuta despues de todos los test"));
beforeEach(()=> console.log("beforeEach- - Se ejecuta antes de cada test"));
afterAll(()=> console.log("afterAll - - Se ejecuta despues de cada test"))

const asyncPromise = () => new Promise((resolve) => resolve(true));

test("Esperar a que se resuelva la promesa", () => {
  asyncPromise().then(result => {
    expect(result).toBe(true);
  })
});

test('Resolver Promesa usando async / await', async () => {
  const result = await asyncPromise();
  expect(result).toBe(true);
});

test('Resolver promesa usando el objeto resolver', ()=> {
  const result = asyncPromise();
  expect(result).resolves.toBe(true);
})

const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

test('Resolver promesa usando callback', (done) => {
  asyncCallback((result)=> {
    expect(result).toBe(true);
    done();
  })
});