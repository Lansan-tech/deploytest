import { InvoicesService } from '../invoices.service';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Invoice } from './entity/invoice.entity';
import { User } from './entity/user.entity';

@Resolver(() => Invoice)
export class InvoicesResolver {
  constructor(private invoiceService: InvoicesService) {}

  @Query(() => [Invoice])
  getAllInvoices(): Invoice[] {
    return [{ authorId: 1, title: '', uuid: '', user: { id: 1, posts: [] } }];
  }
  @Query(() => Invoice)
  findInvoice(@Args('id') id: number): Invoice {
    return { authorId: 1, title: '', uuid: '', user: { id: 1, posts: [] } };
  }

  @ResolveField(() => User)
  user(@Parent() post: Invoice) {
    return { __typename: 'User', id: post.authorId };
  }
}
