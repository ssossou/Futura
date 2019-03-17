import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photos } from "./Interface";

import { Observable } from "rxjs";
//import "rxjs/Rx";
let url = "https://jsonplaceholder.typicode.com/photos";
@Injectable()
export class service {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(url);
  }
}
