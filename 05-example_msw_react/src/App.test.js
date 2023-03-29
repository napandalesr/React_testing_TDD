import { setupServer } from 'msw/node';
import { rest } from "msw";
import { database } from './DB';

const server = setupServer(
  rest.get('https://api.backend.dev/user', (req, res, ctx) => {
    return res(ctx.json(database))
  }),
  rest.post('https://api.backend.dev/user', (req, res, ctx) => {
    return res(ctx.json(database))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders learn react link', () => {
  return fetch("https://api.backend.dev/user", {
    method: "POST"
  }).then(response=> {
    return response.json();
  }).then(result => {
    expect(result[0]).toHaveProperty("usuarios");
    expect(result[0].usuarios[0]).toHaveProperty("email");
    expect(result[0].usuarios[0]).toHaveProperty("name");
    expect(result[0].usuarios[0]).toHaveProperty("password");
    expect(result[0].usuarios[0]).toHaveProperty("position");
  });
});
