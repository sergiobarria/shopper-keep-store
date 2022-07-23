import * as bcrypt from 'bcryptjs';

export const users = [
  {
    email: 'sergio@gmail.com',
    username: 'sergio',
    password: bcrypt.hashSync('pass123'),
    role: 'admin',
  },
  {
    email: 'john@gmail.com',
    username: 'john',
    password: bcrypt.hashSync('pass123'),
    role: 'user',
  },
];
