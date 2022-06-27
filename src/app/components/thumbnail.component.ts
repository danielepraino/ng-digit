import { Photo } from './../models/photo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ac-thumbnail',
  template: `
    <div class="grid grid-cols-3 md:gap-6 mt-8 w-full">
      <div class="mt-10" *ngFor="let photo of photos">
        <img class="h-full" [src]="photo.src?.medium" [alt]="photo.alt" (click)="showPhoto.emit(photo)">
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() photos: Photo[] = [];
  @Output() showPhoto = new EventEmitter<any>();
}
