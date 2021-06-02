const makePath =
  (path: string) =>
  (id?: string): string =>
    id ? path.replace(":id", id) : path;

const Routes = {
  home: {
    getPath: makePath("/"),
  },
  article: {
    getPath: makePath("/post/:id"),
  },
  artist: {
    getPath: makePath("/artist/:id"),
  },
  login: {
    getPath: makePath("/login"),
  },
};

export default Routes;
