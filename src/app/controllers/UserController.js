const User = require("../models/User");

class UserController {
  async index(req, res) {
    const a = req.body;
    console.log(a);
  }
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({
        error: "O Email já está em uso"
      });
    }
    const user = await User.create(req.body);

    return res.json(user);
  }
}

module.exports = new UserController();
