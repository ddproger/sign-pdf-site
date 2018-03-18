import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profilePath = './assets/img/logo.png';

  constructor() {
  }

  onImageLoad(event: any): void{
    alert('image loaded(Profile)');
  }
}
