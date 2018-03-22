import {Injectable} from '@angular/core';
import {ProfileSignService} from '@app/services/profile-sign-service';
import {Signature} from '@app/models/signature';
import {Certificate} from '@app/models/certificate';
import {ServiceException} from '@app/exceptions/service-exception';
import {AuthenticationService} from '@alfresco/adf-core';

@Injectable()
export class ProfileSignServiceImplService implements ProfileSignService {
  constructor(private authService: AuthenticationService) {
  }

  getCertificate(): Certificate {
    throw new ServiceException('not implemented yet');
  }

  setSignature(signature: Signature): void {
    throw new ServiceException('not implemented yet');
  }

  resetSignature(): void {
    throw new ServiceException('not implemented yet');
  }

  getSignature(): Signature {
    throw new ServiceException('not implemented yet');
  }

  setCertificate(certificate: Certificate): void {
    throw new ServiceException('not implemented yet');
  }

  resetCertificate(): void {
    throw new ServiceException('not implemented yet');
  }
}
