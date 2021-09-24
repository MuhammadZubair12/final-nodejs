
const Company = require('../models/Company');

const CompanyController = () => {
  const companyregister = async (req, res) => {
    const { body } = req;
    // try {
    //   const com = await Company.create({
    //       company_name: body.company_name,
    //       email: body.email,
    //       longitude: body.longitude,
    //       latitude: body.latitude,
    //       phone_number: body.phone_number,
    //       status:body.status
    //   })
    //   return res.status(200).json(com)
    // } catch (err) {
    //   res.status(500).json({msg: 'Internal Server error'})
    // }
  }
  return {
    companyregister,
  };
};

module.exports = CompanyController;
