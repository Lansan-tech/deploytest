import { InvoicesService } from '../invoices.service';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Invoices } from './entity/invoice.entity';
import { PosterService } from '@app/common/poster/poster.service';

@Resolver(() => [Invoices])
export class InvoicesResolver {
  constructor(
    private invoiceService: InvoicesService,
    private posterService: PosterService,
  ) {}

  @Query(() => [Invoices])
  async allInvoices(): Promise<Invoices[]> {
    this.posterService.init({
      month: 10,
      year: 2022,
    });
    return this.posterService.compileToArray();
  }
  // @Query(() => Invoices)
  // findInvoice(@Args('id') id: number): Invoices {
  //   return {
  //     invoice :[{client: '', full_name}]
  //   };
  // }

  // @ResolveField(() => User)
  // user(@Parent() post: Invoices) {
  //   return { __typename: 'User', id: post.user.id };
  // }
}
