import { PosterService } from '@app/common/poster/poster.service';
import { Controller, Get, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(
    private readonly invoicesService: InvoicesService,
    private posterService: PosterService,
  ) {}

  @Get()
  getHello(): string {
    return this.invoicesService.getHello();
  }

  @Post('poster/report')
  async posterReport() {
    this.posterService.init({
      monitor: false,
      month: 10,
      year: 2022,
    });
    return this.posterService.compileToArray();
  }
}
