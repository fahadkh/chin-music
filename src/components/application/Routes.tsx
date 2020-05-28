const makePath = (path: string) => (id?: string): string =>
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
};

export default Routes;
