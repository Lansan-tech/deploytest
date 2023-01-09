import { PosterService } from '@app/common/poster/poster.service';
import { Global, Injectable } from '@nestjs/common';

@Global()
@Injectable()
export class InvoicesService {
  constructor(private posterService: PosterService) {}
  getAllInvoices() {
    return {};
  }
  getHello(): string {
    return 'Hello World!';
  }
}
