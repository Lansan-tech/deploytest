import { InvoicesService } from '../invoices.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Invoices, Poster } from './entity/invoice.entity';
import { PosterService } from '@app/common/poster/poster.service';
import { PosterOptions } from './Dtos';

@Resolver(() => [Invoices])
export class InvoicesResolver {
  constructor(
    private invoiceService: InvoicesService,
    private posterService: PosterService,
  ) {}

  @Query(() => [Invoices])
  async allInvoices(
    @Args('posterOptions') posterOptions: PosterOptions,
  ): Promise<Invoices[]> {
    this.posterService.init(posterOptions);
    return this.posterService.compileToArray();
  }

  @Mutation(() => Poster)
  async postInvoices(
    @Args('posterOptions') posterOptions: PosterOptions,
  ): Promise<Poster> {
    this.posterService.init(posterOptions);
    const posted = await this.posterService.post();
    return { posted };
  }
  @Mutation(() => Poster)
  async unPostInvoices(
    @Args('posterOptions') posterOptions: PosterOptions,
  ): Promise<Poster> {
    this.posterService.init(posterOptions);
    const posted = await this.posterService.unpost();
    return { posted };
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
