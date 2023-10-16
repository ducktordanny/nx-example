import {Controller, Get} from '@nestjs/common';

import {IWelcome} from '@nx-example/shared/data-api-interfaces';
import {welcomeResponse} from '@nx-example/shared/data-constants';

@Controller()
export class AppController {
  @Get()
  getData(): IWelcome {
    return welcomeResponse;
  }
}
