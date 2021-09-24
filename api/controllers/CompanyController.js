const Company = require('../models/company');

const CompanyController = () => {
  const company = async (req, res) => {
    const com = await Company.create({
      company_name: req.body.company_name,
      email: req.body.email,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      phone_number: req.body.phone_number,
      status: req.body.status,
    });
    if (com) {
      return res.status(200).json(com);
    } else {
      return res.status(500).json({msg: 'Internal Server error'});
    }
  };

  return {
    company,
  };
};

module.exports = CompanyController;
