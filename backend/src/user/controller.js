import userService from './service.js';

class User {
  async find(req, res) {
    const { email } = req.body;
    const { code, user, message } = await userService.find(email);
    if (message) res.status(code).json(message);
    return res.status(code).json(user);
  }
}

export default new User();
