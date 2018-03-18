import {Component} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profilePath = './assets/img/profile.png';
  certificatePath =  './assets/img/signed.png';
  signaturePath = './assets/img/signature.png';

  constructor() {
  }

  onImageLoad(event: any): void{
    alert('image loaded(Profile)');
  }
}
