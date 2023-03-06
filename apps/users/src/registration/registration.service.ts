import { Injectable, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@app/common';
import { PrismaService } from '@app/common';
import { landlordRegistration } from './values/Landlord.entity';
import { PropertyFlow } from './values/Property';
import { tenantRegistration } from './values/Tenant.entity';
import { Field, Flow } from './values/type';

@UseGuards(JwtGuard)
@Injectable()
export class RegistrationService {
  constructor(private prismaService: PrismaService) {}
  tenantRegistrationFlow() {
    const flow = this.extarctPopulation(tenantRegistration);
    console.log(flow);
    return flow;
  }
  landlordRegistrationFlow() {
    const flow = this.extarctPopulation(landlordRegistration);
    return flow;
  }
  propertyRegistrationFlow() {
    const flow = this.extarctPopulation(PropertyFlow);
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
