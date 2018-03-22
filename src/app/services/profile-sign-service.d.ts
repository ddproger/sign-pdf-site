import {Signature} from '@app/models/signature';
import {Certificate} from '@app/models/certificate';

export interface ProfileSignService {
  setSignature(signature: Signature): void;

  resetSignature(): void;

  getSignature(): Signature;

  setCertificate(certificate: Certificate): void;

  resetCertificate(): void;

  getCertificate(): Certificate;
}
