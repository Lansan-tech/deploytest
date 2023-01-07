import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InvoicesService } from '../invoices.service';
import { Invoice } from './entity/invoice.entity';
import { User } from './entity/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly invoiceService: InvoicesService) {}

  @ResolveField((of) => [Invoice])
  public posts(@Parent() user: User): Invoice[] {
    //find the invoice of the user.
    return [
      {
        authorId: 1,
        title: '',
        uuid: '',
        user: {
          id: 2,
          posts: [],
        },
      },
    ];
  }
}
