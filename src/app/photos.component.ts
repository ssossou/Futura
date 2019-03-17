import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { service } from "./service";
import { Photos } from "./Interface";
import { Observable, Subscription } from "rxjs";
// import { filter } from 'rxjs/operators/filter';
// import { map } from 'rxjs/operators/map';

@Component({
  selector: "photos",
  templateUrl: "./photos.component.html"
})
export class photosComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: service,
    private common: CommonModule
  ) {}

  public Photos: Photos[];

  ngOnInit() {
    let Photos = this.getPhotos().subscribe(data => {
      this.Photos = data;
    });
  }

  getPhotos() {
    return this.service.getPhotos();
  }
}
