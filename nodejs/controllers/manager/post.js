const { managerModel } = require("../../models/managers");
const { contactModel } = require("../../models/contacts");

exports.post = async (req, res) => {
  console.log("post.js :");

  // check input
  console.log(req.body);
  if (!req.body || !req.body.username || !req.body.password)
    return req.json({ message: "INPUT IS NOT VALID" });
  const { username, password, phone, email } = req.body;

  // check database
  const emailFind = await managerModel.find({ username });
  console.log(`emailFind`, emailFind);
  if (emailFind.length > 0) return res.json({ message: "Account exist" });

  // main function
  const contactSave = new contactModel({
    phone,
    email,
  });
  await contactSave.save();

  let lastDoc = (await managerModel.find({}).sort({ _id: -1 }).limit(1))[0];
  console.log(lastDoc);

  const managerSave = new managerModel({
    id: lastDoc.id + 1,
    username,
    password,
    role: "admin",
    contact_id: contactSave._id,
  });

  await managerSave.save();

  //  res
  res.json({
    message: "add success",
  });
};
