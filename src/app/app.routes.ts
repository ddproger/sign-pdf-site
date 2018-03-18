import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {HomeComponent} from '@app/pages/home/home.component';
import {LibraryComponent} from '@app/pages/library/library.component';
import {SiteComponent} from '@app/pages/site/site.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'site',
    component: SiteComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
