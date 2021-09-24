const Sheet = require('../models/Sheet');

const AbcController = () => {
    const sheet = (req, res) => {
        let sheetdata = [];
        const body = req.body;
        // console.log(body);
        body.forEach((row) => {
          let cs =  {
            name: row[0],
            code:row[1],
            category: row[2],
            category_code: row[3],
            purchase_price: row[4],
            sale_price: row[5],
            quantity: row[6],
            company_id:row[7],
            image:row[8]
        }
          sheetdata.push(cs)
        })
        // sheetdata.shift();
        return Sheet.bulkCreate(sheetdata).then(_cs=> {
          return res.status(200).json(_cs);
        }).catch(err=> {
          return res.status(500).json(err);
        });
    
      }

  return {
    sheet,
  };
};

module.exports = AbcController;
