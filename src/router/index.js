import {
  RegisterRouter,
  LoginRouter,
  CharacterRouter,
  MovieRouter,
  GenreRouter
} from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [
  ["/auth/register", RegisterRouter],
  ["/auth/login", LoginRouter],
  ["/character", CharacterRouter],
  ["/movie", MovieRouter],
  ["/genre", GenreRouter]
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
