import {Component, OnInit} from '@angular/core';
import {MyServiceService} from '@app/services/impl/my-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePath: string;
  certificatePath: string;
  isEditMode = false;

  constructor(private service: MyServiceService) {
  }

  ngOnInit(): void {
    this.profilePath = this.service.getProfileUrl();
    this.certificatePath = this.service.getCertificateUrl();
  }

  onImageLoad(event: any): void {
    alert('image loaded(Profile)');
  }

  enableEditMode() {
    this.isEditMode = true;
  }

  submit() {
    alert('profile saved');
    this.isEditMode = false;
  }

  cancel() {
    alert('edit canceled');
    this.isEditMode = false;
  }
}
