import { Photo } from './models/photo';
import { PhotosService } from './api/photos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <div class="grid md:grid-cols-5 md:gap-6 w-screen h-screen md:pt-24 md:pr-14 md:pb-32">
      <ac-menu [photos]="photos" (selectPhoto)="selectPhoto($event)"></ac-menu>
      <ac-photos class="md:col-span-4" [mainPhoto]="mainPhoto" [photos]="photos"></ac-photos>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-digit';

  mainPhoto: Photo = {
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

  photos: Photo[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(res => {
      this.mainPhoto = res.photos[0];
      this.photos = res.photos;
    });
  }

  selectPhoto(event: any) {
    this.mainPhoto = event;
  }
}
