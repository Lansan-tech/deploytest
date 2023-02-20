import { Injectable, UseGuards } from '@nestjs/common';
import { AuthDto } from '@app/common';
import { JwtGuard } from '../auth/guard';
import { PrismaService } from '@app/common';
import { landlordRegistration } from './Entity/Landlord.entity';
import { PropertyFlow } from './Entity/Property';
import { clientRegistration } from './Entity/Tenant.entity';
import { Field, Flow } from './Entity/type';

@UseGuards(JwtGuard)
@Injectable()
export class RegistrationService {
  constructor(private prismaService: PrismaService) {}
  tenantRegistrationFlow(user: AuthDto) {
    const flow = this.extarctPopulation(clientRegistration);
    return clientRegistration;
  }
  landlordRegistrationFlow(user: AuthDto) {
    console.log(user);
    const flow = this.extarctPopulation(landlordRegistration);
    return flow;
  }

  extarctPopulation(flow: Flow) {
    for (const key in flow) {
      if (flow[key].populate) {
        //Populate all the slect and check box  optio values
        flow[key].fields.forEach(async (field) => {
          if (field.type === 'select' || field.type === 'checkbox') {
            console.log(await this.populate(field));
            field.options.values = await this.populate(field);
          }
        });
      }
    }
  }

  propertyRegistrationFlow(user: AuthDto) {
    const flow = this.extarctPopulation(PropertyFlow);
    return flow;
  }

  async populate(field: Field): Promise<[]> {
    //Polutaion means, converting the options field to a value of lable and  Vlaue for user ineraction.
    //Extarct the value and label fields from the fields array
    const [value, label] = field.options.fields;
    const tname = field.options.tableName;
    const sql = `Select ${value} as value, ${label} as label from  ${tname} `;
    const results = (await this.prismaService.query(sql)) as [];
    return results;
  }
}
