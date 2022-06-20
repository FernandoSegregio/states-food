import restaurantService from './service.js';

class Restaurant {
  async find(_req, res) {
    const { code, restaurants, message } = await restaurantService.find();
    if (message) res.status(code).json(message);
    return res.status(code).json(restaurants);
  }
  async findMeals(req, res) {
    const { id } = req.params;
    console.log(id);
    const { code, meals, message } = await restaurantService.findMeals(id);
    if (message) res.status(code).json(message);
    return res.status(code).json(meals);
  }
}

export default new Restaurant();