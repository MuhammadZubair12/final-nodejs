const Abc = require('../models/Abc');

const AbcController = () => {
  const abc = async (req, res) => {
    const { body } = req;
    const com = await Abc.create({
        name: body.name,
        status:body.status,
    });
    if (com) {
      return res.status(200).json(com);
    } else {
      return res.status(500).json({msg: 'Internal Server error'});
    }
  };

  return {
    abc,
  };
};

module.exports = AbcController;
