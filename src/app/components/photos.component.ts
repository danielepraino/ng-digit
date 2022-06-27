import { Photo } from '../models/photo';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ac-photos',
  template: `
    <div>
      <div class="text-center text-white font-bold bg-green-500 rounded-full max-w-fit absolute right-0 m-2 md:mr-16 px-4 py-2">
        <a [href]="this.mainPhoto.photographer_url">Ph: {{this.mainPhoto.photographer}}</a>
      </div>
      <div class="max-h-full">
        <img class="object-cover md:w-full md:h-96" [src]="this.mainPhoto.src?.large" [alt]="this.mainPhoto.alt">
      </div>
      <ac-thumbnail [photos]="photos" (showPhoto)="showPhoto($event)"></ac-thumbnail>
    </div>
  `,
  styles: [
  ]
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showPhoto(event: any) {
    this.mainPhoto = event;
  }


  @Input() mainPhoto:Photo = {
    id: 0,
    width: 0,
    height: 0,
    url: '',
    photographer: '',
    photographer_url: '',
    photographer_id: 0,
    avg_color: '',
    alt: '',
  };
  @Input() photos:Photo[] = [];
}
