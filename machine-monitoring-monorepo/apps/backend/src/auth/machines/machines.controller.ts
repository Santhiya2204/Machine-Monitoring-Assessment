import { Controller, Get, Param, Post, Body, UseGuards, Req } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('machines')
export class MachinesController {
  constructor(private service: MachinesService) {}

  // In a real app you'd use @UseGuards(AuthGuard('jwt')) but for simplicity
  // we assume the JwtModule and strategies are configured; the guard wiring
  // will work when using Nest's passport integration.

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll(@Req() req) {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/update')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(Number(id), body);
  }
}
