const User = require("../models/User");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      //req.flash("error", "Usuário não encontrado");
      return res.redirect("/");
    }

    if (!(await user.compareHash(password))) {
      //req.flash("error", "Senha incorreta");
      return res.redirect("/");
    }
    req.session.user = user;
    return res.redirect("/dashboard");
  }
}
module.exports = new SessionController();
