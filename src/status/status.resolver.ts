import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StatusService } from './status.service';
import { Status } from './entities/status.entity';


@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => [Status], { name: 'LINE' })
  async getLines(): Promise<Status[]> {
    return this.statusService.findAll();
  }
}
