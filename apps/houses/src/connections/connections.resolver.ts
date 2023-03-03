import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateWaterDto } from './Dtos';
import { ElectrictyConnectionService } from './electrictyConnections.service';
import { PowerConnection } from './Entity/powerConnection.entity';
import { WaterConnection } from './Entity/waterConnection.entiry';
import { WaterConnectionService } from './waterConnection.service';

@Resolver()
export class ConnectionsResolver {
  constructor(
    private waterConnectionService: WaterConnectionService,
    private powerService: ElectrictyConnectionService,
  ) {}

  @Mutation(() => WaterConnection)
  createWaterConnection(
    @Args('createWaterInput') createWaterInput: CreateWaterDto,
  ) {
    return this.waterConnectionService.createWaterConnection(createWaterInput);
  }

  @Mutation(() => PowerConnection)
  createPowerConnection() {
    return this.powerService.createPowerConnection('');
  }
}
