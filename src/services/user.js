const models = require('../models')

const User = models.User
const UserAccount = models.UserAccount
const sequelize = models.sequelize

// creates paginated users list
// @params pageNum: integer
// @return object
exports.findAll = async pageNum => {
  try {
    const total = await User.count()
    const limit = 10
    const page = parseInt(pageNum) || 1
    const offset = limit * (page - 1)
    const docs = await User.scope('sorted').findAll({
      limit,
      offset
    })

    return { docs, meta: { total, limit, page } }
  } catch (err) {
    return err
  }
}

// find user by key
// @parmas args { uid: 'xxxxxxxxxxxxxxx' }
// @return object
exports.findOne = async args => {
  try {
    const user = await User.findOne({
      where: args,
      include: 'account'
    })

    if (user === null) {
      return {
        errors: { message: 'not found' }
      }
    }

    return user
  } catch (err) {
    return {
      errors: { message: 'something went wrong' }
    }
  }
}

// creates user and userAccount in transaction block
// performs rollback if validation errors occurred
// @params args: { uid: 'xxxxxxxxxxxxxxx , account: { ... }}
// @return object
exports.create = async args => {
  let transaction

  try {
    transaction = await sequelize.transaction()

    let user = await User.create({ uid: args.uid }, { transaction })
    await UserAccount.create(
      { ...args.account, userId: user.id },
      { transaction }
    )

    transaction.commit()

    user = await User.findOne({
      where: { uid: user.uid },
      include: 'account'
    })

    return user
  } catch (err) {
    await transaction.rollback()
    return err
  }
}

// Update userAccount attrs
// @params uid:xxxxxxxxxxxxxxx, args: { account: { ... } }
exports.update = async (uid, args) => {
  try {
    let user = await User.findOne({
      where: { uid },
      include: 'account'
    })

    await user.account.update(args.account)
    user = await user.reload()

    return user
  } catch (err) {
    return err
  }
}
