import {BaseException} from '@angular-devkit/core';

export class ServiceException extends BaseException {

  constructor(message: string) {
    super(message);
  }
}
