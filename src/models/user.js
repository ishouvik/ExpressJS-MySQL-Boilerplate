'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    scopes: {
      sorted: {
        order: [
          ['createdAt', 'DESC']
        ]
      }
    }
  })

  // User.associate = models => {
  //   User.hasOne(models.UserAccount, {
  //     as: 'account',
  //     foreignKey: 'userId'
  //   })
  // }

  return User
}
