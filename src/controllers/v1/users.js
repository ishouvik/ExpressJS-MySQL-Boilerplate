const UserService = require('@services/user')
const UserSerializer = require('@serializers/v1/user')

exports.index = async (req, res) => {
  try {
    const { docs, meta } = await UserService.findAll(req.query.page)
    res.json(UserSerializer(docs, meta))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.show = async (req, res) => {
  try {
    const user = await UserService.findOne({ uid: req.params.uid })

    if (user.errors) res.status(404).send(user.errors)
    res.json(UserSerializer(user))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.create = async (req, res) => {
  try {
    const user = await UserService.create(req.body)

    if (user.errors) res.status(422).send(user.errors)
    res.json(UserSerializer(user))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.update = async (req, res) => {
  try {
    const user = await UserService.update(req.params.uid, req.body)

    if (user.errors) res.status(422).send(user.errors)
    res.json(UserSerializer(user))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}
