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
import { PosterService } from '@app/common';
import { PosterOptions } from './Dtos';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '@app/common/auth/guard';

@UseGuards(JwtGuard)
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

  @Mutation(() => Invoices)
  getClientInvoice(@Args('clientName') clientName: string) {
    return this.posterService.getInvoiceByClient(`client.name=${clientName}`);
  }
}
