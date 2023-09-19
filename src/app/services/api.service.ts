import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class apiService
{
  constructor(private httpclient:HttpClient){}
  getUserAlbums(userId: number): Observable<any> {
    return this.httpclient.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
  getAlbums():Observable<any>
  {

    return this.httpclient.get("https://jsonplaceholder.typicode.com/albums");
  }

  getPhotos(selectedAlbumId:string):Observable<any>
  {
    let params1=new HttpParams().set('albumId',selectedAlbumId);
    return this.httpclient.get("https://jsonplaceholder.typicode.com/photos",{params:params1});
  }
}
