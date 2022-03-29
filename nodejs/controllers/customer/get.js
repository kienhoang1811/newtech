const { customerModel } = require('../../models/customers')
const { contactModel } = require('../../models/contacts')
const { addressModel } = require('../../models/addresses')

exports.get = async (req, res) => {
  console.log('get.js :')

  // check input

  // check database
  console.log(123)
  const customers = await customerModel
    .find({})
    .populate('address_id')
    .populate('contact_id')
  console.log(`customers`, customers)

  customers.forEach((x) => (x.password = null))

  //  res
  res.json({
    message: 'get',
    customers,
    // contacts,
    // addresses
  })
}
