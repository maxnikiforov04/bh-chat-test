export const routes = {
  root: '/',
  home() {
    return routes.root;
  },
  page404() {
    return routes.root.concat('not-found/');
  },

  auth: {
    root() {
      return routes.root.concat('auth/');
    },
    login() {
      return routes.auth.root().concat('login/');
    },
    register() {
      return routes.auth.root().concat('register/');
    },
  },
};
