import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '@app/app.component';
import {routing} from '@app/app.routes';
import {HomeComponent} from '@app/pages/home/home.component';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {LibraryComponent} from '@app/pages/library/library.component';
import {SiteComponent} from '@app/pages/site/site.component';
import {EditImgBlockComponent} from '@app/components/edit-img-block/edit-img-block.component';
import {MyServiceService} from '@app/services/impl/my-service.service';
import {AdfModule} from '@app/adf.module';
import {LoginComponent} from '@app/pages/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NodeViewComponent} from '@app/components/node-view/node-view.component';
import {TRANSLATION_PROVIDER} from '@alfresco/adf-core';

const MaterialModules = [MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  FlexLayoutModule,
  MatIconModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LibraryComponent,
    SiteComponent,
    EditImgBlockComponent,
    LoginComponent,
    NodeViewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MaterialModules,
    AdfModule
  ],
  exports: [MaterialModules],
  providers: [MyServiceService,
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: 'my-translations',
        source: 'assets/my-translations'
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
