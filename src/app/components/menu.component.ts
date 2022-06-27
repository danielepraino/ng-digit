import { Photo } from '../models/photo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ac-menu',
  template: `
    <div class="bg-gray-100 md:w-full md:h-full md:pt-44">
      <ul *ngFor="let photo of photos; let i = index">
        <li class="hover:bg-gray-300 px-10 py-2" (click)="selectPhoto.emit(photo)">Image {{i+1}}</li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active(isActive:boolean) {
    isActive = true;
  }

  @Input() photos:Photo[] = [];
  @Output() selectPhoto = new EventEmitter<any>();
}
