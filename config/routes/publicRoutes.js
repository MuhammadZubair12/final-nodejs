const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'POST /companyregister': 'UserController.companyregister',
};

module.exports = publicRoutes;
