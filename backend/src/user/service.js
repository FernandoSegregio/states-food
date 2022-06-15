import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class User {
  async find(email) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return { code: 404, message: 'user not found' };
      return { code: 200, user };
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }
}

export default new User();
