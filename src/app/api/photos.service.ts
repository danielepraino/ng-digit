import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo';

const httpAuthToken = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get<Photo[]>(`${environment.apiUrl}/search?query=nature&per_page=3`, httpAuthToken);
  }
}
