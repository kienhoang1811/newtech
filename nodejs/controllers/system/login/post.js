const { accountModel } = require("../../../models/account");

exports.post = async (req, res) => {
  console.log("post.js :");

  // check input
  console.log(req.body);
  if (!req.body || !req.body.username || !req.body.password)
    return req.json({ message: "INPUT IS NOT VALID" });
  const { username, password } = req.body;

  // check database

  const emailFind = await accountModel.findOne({ username });
  console.log("1");
  console.log(emailFind);
  if (!emailFind)
    return res.status(200).json({ error: "TÀI KHOẢN KHÔNG TỒN TẠI" });
  console.log("     pass exist");

  const accountFind = await accountModel.findOne({
    username,
    password,
  });
  if (!accountFind)
    return res.status(200).json({ error: "TÀI KHOẢN KHÔNG TỒN TẠI" });
  console.log("     pass exist");

  // main function
  //  res
  res.json({
    message: "login success",
    account: accountFind,
  });
};
