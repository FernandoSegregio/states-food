import userService from './service.js';

class User {
  async find(req, res) {
    const { email } = req.tokenData;
    const { code, user, message } = await userService.find(email);
    if (message) res.status(code).json(message);
    return res.status(code).json(user);
  }
  async login(req, res) {
    const { email, password } = req.body;
    const { code, token, message } = await userService.login({email, password});
    if (message) res.status(code).json(message);
    return res.status(code).json(token);
  }
}

export default new User();
