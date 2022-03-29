const { accountModel } = require('../../../models/account')

exports.post = async (req, res) => {
  console.log('post.js :')

  // check input
  console.log(req.body)
  if (!req.body || !req.body.username || !req.body.password)
    return req.json({ message: 'INPUT IS NOT VALID' })
  const { username, password } = req.body

  // check database
  const emailFind = await accountModel.find({ username })
  console.log(`emailFind`, emailFind)

  const emailPwdFind = await accountModel.findOne({ username, password })
  console.log(`email2Find`, emailPwdFind)

  // main function

  //  res
  res.json({
    message: 'login success',
    account: emailPwdFind,
  })
}
