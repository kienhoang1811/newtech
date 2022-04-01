const { customerModel } = require("../../models/customers");
const { contactModel } = require("../../models/contacts");
const { addressModel } = require("../../models/addresses");

exports.post = async (req, res) => {
  console.log("post.js :");

  // check input
  const { username, password, phone, email, street, ward, district, city, country } =
    req.body;
  console.log(req.body);

  //check db
  let lastDoc = (await customerModel.find({}).sort({ _id: -1 }).limit(1))[0];
  console.log(lastDoc);

  const contactSave = new contactModel({
    phone,
    email,
  });
  await contactSave.save();

  console.log(contactSave);

  const addressSave = new addressModel({
    _id: contactSave._id,
    id: lastDoc.id + 1,
    street,
    ward,
    district,
    city,
    country,
  });
  await addressSave.save();

  const customerSave = new customerModel({
    id: lastDoc.id + 1,
    username,
    password,
    address_id: addressSave._id,
    contact_id: contactSave._id,
  });
  await customerSave.save();

  // main

  //  res
  res.json({
    message: "post",
  });
};
