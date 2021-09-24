const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'POST /abc': 'AbcController.abc',
  'POST /company': 'CompanyController.company',
  'GET /getCompany': 'CompanyController.getCompany',
  'GET /getCompanyById/:id': 'CompanyController.getCompanyById',
  'PUT /updatecompany/:id': 'CompanyController.updatecompany',
};

module.exports = publicRoutes;
