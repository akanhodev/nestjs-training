import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  getHello() {
    return this.UserService.getUsers();
  }
}
