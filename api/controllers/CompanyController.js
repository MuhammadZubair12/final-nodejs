const Company = require('../models/company');

const CompanyController = () => {
  const company = async (req, res) => {
    const check = await Company.findOne({
      where: {email:req.body.email}
    });
    if (check) {
      return res.status(401).json({errMsg: 'Email Already Exists'})
    } else {
      const com = await Company.create({
        company_name: req.body.company_name,
        email: req.body.email,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        address: req.body.address,
        phone_number: req.body.phone_number,
        status: req.body.status,
      });
      if (com) {
        return res.status(200).json(com);
      } else {
        return res.status(500).json({msg: 'Internal Server error'});
      }
    }
  };

  const updatecompany = (req, res) => {
    const { body } = req;
    return Company.findOne({
      where: { id: req.params.id },
    })
      .then((data) => {
        if (!data) {
          return res
            .status(400)
            .json({ msg: "Record not found " });
        }
        Company.update(
          {
            company_name: body.company_name,
            email:body.email,
            longitude:body.longitude,
            latitude:body.latitude,
            address:body.address,
            phone_number:body.phone_number,
            status:body.status
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then(() => {
            res.status(200).json({ msg: "Data Updated Successfully" });
          })
          .catch(() => {
            res.status(500).json({ msg: "Internal Server Error" });
          });
      })
      .catch(() => {
        res.status(500).json({ msg: "Internal Server Error " });
      });
  };

  const getCompany = async (req, res) => {
      const com = await Company.findAll();
      if (com) {
        return res.status(200).json(com);
      } else {
        return res.status(500).json({msg: 'Internal Server error'});
      }
  };

  const getCompanyById = async (req, res) => {
      const com = await Company.findOne({
        where: {id:req.params.id}
      });
      if (com) {
        return res.status(200).json(com);
      } else {
        return res.status(500).json({msg: 'Internal Server error'});
      }
  };

  return {
    company,
    getCompany,
    getCompanyById,
    updatecompany,
  };
};

module.exports = CompanyController;
