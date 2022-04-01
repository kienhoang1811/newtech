const { customerModel } = require("../../models/customers");
const { contactModel } = require("../../models/contacts");
const { addressModel } = require("../../models/addresses");

exports.patch = async (req, res) => {
  console.log("patch.js :");

  // check input
  console.log(`req.params`, req.params);
  console.log(`req.body`, req.body);

  const {
    username,
    // password,
    phone,
    email,
    street,
    district,
    ward,
    city,
    country,
  } = req.body;

  const { id } = req.params;

  console.log(`req body 123: `, req.body);
  // check database
  const customerRecord = await customerModel.findOne({ id });
  if (!customerRecord) return res.json({ message: "FAIL 2" });

  // main function
  const customerEdit = await customerModel.findOneAndUpdate(
    { id },
    { $set: { username } },
    { useFindAndModify: false }
  );

  console.log(`customerEdit`, customerEdit);

  // const testRecord = await addressModel.findOne({
  //   _id: customerEdit.address_id,
  // });
  // if (!testRecord) return res.json({ message: "FAIL test" });

  // console.log(200, testRecord);

  const addressEdit = await addressModel.findOneAndUpdate(
    { _id: customerEdit.address_id },
    { $set: { street, district, ward, city, country } },

    { useFindAndModify: false }
  );

  console.log(`addressEdit`, addressEdit);

  const contactEdit = await contactModel.findOneAndUpdate(
    { _id: customerEdit.contact_id },
    { $set: { phone, email } },
    { useFindAndModify: false }
  );

  console.log(`contactEdit`, contactEdit);

  //  res
  res.json({
    message: "patch",
  });
};
