import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from '@app/app.component';
import {routing} from '@app/app.routes';
import {HomeComponent} from '@app/pages/home/home.component';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatGridListModule,
  MatToolbarModule
} from '@angular/material';
import {LibraryComponent} from '@app/pages/library/library.component';
import {SiteComponent} from '@app/pages/site/site.component';
import {EditImgBlockComponent} from './components/edit-img-block/edit-img-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LibraryComponent,
    SiteComponent,
    EditImgBlockComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
