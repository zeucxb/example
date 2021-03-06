import { User, UserRole } from '../api/user/models/user.model';
import * as faker from 'faker';
import { generateCollectionFromModel } from './generator';

const users = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: 'admin@admin.com',
    password: 'admin',
    roles: [UserRole.ADMIN]
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: 'user@user.com',
    password: 'user',
    roles: [UserRole.USER]
  }
];

export const usersGenerator = generateCollectionFromModel(User)(users);
