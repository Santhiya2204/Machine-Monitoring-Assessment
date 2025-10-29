import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MachinesService {
  private file = path.join(__dirname, 'data', 'machines.json');
  private machines = JSON.parse(fs.readFileSync(this.file, 'utf-8'));

  findAll() { return this.machines; }

  findOne(id: number) { return this.machines.find(m => m.id === id); }

  update(id: number, payload: Partial<any>) {
    const idx = this.machines.findIndex(m => m.id === id);
    if (idx === -1) return null;
    this.machines[idx] = { ...this.machines[idx], ...payload };
    fs.writeFileSync(this.file, JSON.stringify(this.machines, null, 2));
    return this.machines[idx];
  }
}
