import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl:string = "https://localhost:7168/api/producto"; 

  constructor(
    public http: HttpClient
  ) { }

  getArticleCode$(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl)
  }

}
