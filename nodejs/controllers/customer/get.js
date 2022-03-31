const { customerModel } = require("../../models/customers");
const { contactModel } = require("../../models/contacts");
const { addressModel } = require("../../models/addresses");

exports.get = async (req, res) => {
  console.log("get.js :");

  // check input
  console.log(`req.body`, req.query);

  if (req.query && req.query.name) {
    console.log("if");

    const customers = await customerModel
      .find({
        username: { $regex: new RegExp(req.query.name, "i") },
      })
      .populate("address_id")
      .populate("contact_id");

    if (customers.length === 0)
      return res.status(200).json({ error: "KHÔNG CÓ KẾT QUẢ PHÙ HỢP" });
    console.log("     [db]");
    // console.log(`customers`, customers);

    customers.forEach((x) => (x.password = null));
    res.json({
      message: "get",
      customers,
      // contacts,
      // addresses
    });
    return;
  }

  // check database
  console.log("else");
  const customers = await customerModel
    .find({})
    .populate("address_id")
    .populate("contact_id");
  // console.log(`customers`, customers);

  customers.forEach((x) => (x.password = null));

  //  res
  res.json({
    message: "get",
    customers,
    // contacts,
    // addresses
  });
};
