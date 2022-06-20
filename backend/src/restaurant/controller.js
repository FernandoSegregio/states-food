import restaurantService from './service.js';

class Restaurant {
  async find(_req, res) {
    const { code, restaurants, message } = await restaurantService.find();
    if (message) res.status(code).json(message);
    return res.status(code).json(restaurants);
  }
  async findFood(req, res) {
    const { id } = req.params;
    const { code, food, message } = await restaurantService.findFood(id);
    if (message) res.status(code).json(message);
    return res.status(code).json(food);
  }
}

export default new Restaurant();