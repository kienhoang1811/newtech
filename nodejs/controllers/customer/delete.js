const { customerModel } = require("../../models/customers");

exports.Delete = async (req, res) => {
  console.log("delete.js :");

  // check input
  console.log("CHECK INPUT: ", req.params);
  if (!req.params) return res.json({ message: "FAIL 1" });
  const { id } = req.params;

  // check database
  const customerRecord = await customerModel.findOne({ id });
  if (!customerRecord) return res.json({ message: "FAIL 2" });

  console.log(`customer record`, customerRecord.id);

  // main function
  const customerDelete = await customerModel.findOneAndDelete({ id });
  console.log(`del: `, customerDelete);

  //  res
  res.json({
    message: "delete",
    status: 1,
  });
};
