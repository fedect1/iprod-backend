import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';


@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly orderRepository: Repository<Status>,
  ) {}

  async findAll(): Promise<Status[]> {
    return this.orderRepository.find();
  }
}
