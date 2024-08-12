import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Izou',
    },
  ];
  getUsers() {
    return this.users;
  }
}
