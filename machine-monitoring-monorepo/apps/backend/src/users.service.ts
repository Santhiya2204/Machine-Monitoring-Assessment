import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly user = {
    id: 1,
    email: 'admin@example.com',
    password: 'password123',
    name: 'Admin'
  };

  async findByEmail(email: string) {
    if (email === this.user.email) return this.user;
    return null;
  }
}
