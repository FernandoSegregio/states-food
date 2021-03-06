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
  async findAllFood(_req, res) {
    const { code, food, message } = await restaurantService.findAllFood();
    if (message) res.status(code).json(message);
    return res.status(code).json(food);
  }
  async findDrink(req, res) {
    const { id } = req.params;
    const { code, drink, message } = await restaurantService.findDrink(id);
    if (message) res.status(code).json(message);
    return res.status(code).json(drink);
  }
  async findAllDrink(_req, res) {
    const { code, drink, message } = await restaurantService.findAllDrink();
    if (message) res.status(code).json(message);
    return res.status(code).json(drink);
  }
}

export default new Restaurant();