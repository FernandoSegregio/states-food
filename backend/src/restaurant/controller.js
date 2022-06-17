import restaurantService from './service.js';

class Restaurant {
  async find(_req, res) {
    const { code, restaurants, message } = await restaurantService.find();
    if (message) res.status(code).json(message);
    return res.status(code).json(restaurants);
  }
}

export default new Restaurant();