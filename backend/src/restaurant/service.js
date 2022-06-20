import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Restaurant {
  async find() {
    try {
      const restaurants = await prisma.restaurant.findMany();
      if (!restaurants) return { code: 404, message: 'restaurant not found' };
      return { code: 200, restaurants };
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }
  async findMeals(id) {
    try {
      const meals = await prisma.menu.findMany({ where: { restaurantId: Number(id) }});
      if (!meals) return { code: 404, message: 'meal not found' };
      return { code: 200, meals };
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }
}

export default new Restaurant();