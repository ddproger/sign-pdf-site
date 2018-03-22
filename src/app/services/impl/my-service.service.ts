import {Injectable} from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() {
  }

  getProfileUrl() {
    return './assets/img/profile.png';
  }
  getCertificateUrl() {
    return './assets/img/signed.png';
  }

}
