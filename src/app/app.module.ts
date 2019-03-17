import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { service } from "./service";
import { photosComponent } from "./photos.component";
import { Observable, Subscription } from "rxjs";
@NgModule({
  declarations: [AppComponent, photosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule {}
