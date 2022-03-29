const { userModel } = require("../../models/customer");

exports.get = async (req, res) => {
    console.log("get.js :");
  
    // check input
  
    // check database
    const customers = await customerModel.find({})
    console.log(`customers`, customers)

    // main function

    //  res
    res.json({
      message: "get",
      customers
    });
  };
  