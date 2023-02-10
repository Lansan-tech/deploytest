import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InvoicesService } from '../invoices.service';
import { Invoices } from './entity/invoice.entity';

// @Resolver((of) => User)
// export class UsersResolver {
//   constructor(private readonly invoiceService: InvoicesService) {}

//   @ResolveField((of) => [Invoices])
//   public posts(@Parent() user: User): Invoices[] {
//     //find the invoice of the user.
//     return [{ authorId: 1, title: '', id: 2 }];
//   }
//}
