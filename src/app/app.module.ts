import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    GalleryComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
