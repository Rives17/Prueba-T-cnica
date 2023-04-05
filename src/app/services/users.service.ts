import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get("https://randomuser.me/api/?results=5")

  }
  // async getUsers(): Promise<void> {

  //   await fetch("https://randomuser.me/api/?results=5")
  //     .then((results) => {
  //       return results.json();
  //     })
  // }
  
}
