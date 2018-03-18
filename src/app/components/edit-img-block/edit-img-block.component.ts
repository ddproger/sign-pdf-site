import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-edit-img-block',
  templateUrl: './edit-img-block.component.html',
  styleUrls: ['./edit-img-block.component.css']
})
export class EditImgBlockComponent implements OnInit {

  pathToImg = './assets/img/logo.png';

  @Input()
  pathToImage = './assets/img/logo.png';

  @Output()
  OnImageLoad: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  OnImageDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  loadImage(event: any) {
    alert('image loaded');
    console.log(event);
    this.OnImageLoad.emit(event);
  }
  deleteImage(event: any) {
    alert('image deleted');
    console.log(event);
    this.OnImageDelete.emit(event);
  }
}
