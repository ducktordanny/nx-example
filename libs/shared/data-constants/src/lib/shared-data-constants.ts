import {IWelcome} from '@nx-example/shared/data-api-interfaces';

export const version = '0.0.0';

export const welcomeResponse: IWelcome = {
  message: 'Hello API',
  description: 'This is a small example NestJS API for representing Nx features.',
  version,
};
