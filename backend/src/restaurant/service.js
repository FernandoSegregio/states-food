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
  async findFood(id) {
    try {
      const food = await prisma.menuFood.findMany({ where: { restaurantId: Number(id) }});
      if (!food) return { code: 404, message: 'meal not found' };
      return { code: 200, food };
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }
  async findDrink(id) {
    try {
      const drink = await prisma.menuDrink.findMany({ where: { restaurantId: Number(id) }});
      if (!drink) return { code: 404, message: 'drink not found' };
      return { code: 200, drink };
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }
}

export default new Restaurant();