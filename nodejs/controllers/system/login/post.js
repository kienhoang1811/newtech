const { managerModel } = require("../../../models/managers");

exports.post = async (req, res) => {
  console.log("post.js :");

  // check input
  console.log(req.body);
  if (!req.body || !req.body.username || !req.body.password)
    return req.json({ message: "INPUT IS NOT VALID" });
  const { username, password } = req.body;

  // check database
  const emailFind = await managerModel.find({ username });
  console.log(`emailFind`, emailFind);

  const emailPwdFind = await managerModel.findOne({ username, password });
  console.log(`email2Find`, emailPwdFind);

  // main function
  emailPwdFind["password"] = null;
  
  //  res
  res.json({
    message: "login success",
    account: emailPwdFind,
  });
};
