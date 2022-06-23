import { PrismaClient } from '@prisma/client';
import jwtGenarator from '../helpers/jwtGenarator.js';
import * as argon2 from "argon2";

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

  async login({email, password}) {
    try {
      const verifyUser = await this.find(email);
      const validatePassword = await argon2.verify(verifyUser.user.password, password);
      
      console.log(verifyUser);
      if (verifyUser.code === 404) return { code: 404, message: 'Usuário ou senha inválidos' };
      if (!validatePassword) {
        return { code: 400, message: 'Usuário ou senha inválidos' };
      }
      const token = jwtGenarator({email});
      return { code: 200, token }
    } catch (error) {
      return { code: 500, message: error.message };
    }
  }


}

export default new User();
