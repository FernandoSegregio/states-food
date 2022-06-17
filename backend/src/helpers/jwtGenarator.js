import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

export default (data = {}) => jwt.sign({ data }, secret, jwtConfig);