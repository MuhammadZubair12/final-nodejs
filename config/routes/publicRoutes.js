const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'POST /company': 'UserController.companyregister',
  'POST /assets': 'UserController.assets',
  'POST /abc': 'UserController.abc',
};

module.exports = publicRoutes;
