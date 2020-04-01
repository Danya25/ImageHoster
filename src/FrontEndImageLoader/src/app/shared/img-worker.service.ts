import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgWorkerService {

  constructor(private http: HttpClient) {}

  getImg(): Observable<string> {
    const httpheader = new HttpHeaders({'Content-type': 'text/html'});
    return this.http.get<string>('http://localhost:4200/api/image/image', {headers: httpheader});
  }

  loadImg(file: FileList): Observable<any> {
    const formData = new FormData();
    formData.append('file', file[0]);

    const httpHeader = {
      header: new HttpHeaders({})
        .set('Content-type', 'multipart/form-data')
    };
    // @ts-ignore
    return this.http.post('https://localhost:5001/api/img/loadimg', formData, httpHeader);
  }

}
