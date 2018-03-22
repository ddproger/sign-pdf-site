import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {HomeComponent} from '@app/pages/home/home.component';
import {LibraryComponent} from '@app/pages/library/library.component';
import {SiteComponent} from '@app/pages/site/site.component';
import {LoginComponent} from '@app/pages/login/login.component';
import {AuthGuardEcm} from '@alfresco/adf-core';
import {NodeViewComponent} from '@app/components/node-view/node-view.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'library/:id',
    component: LibraryComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'site/:id',
    component: SiteComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'node/:id',
    component: NodeViewComponent,
    canActivate: [AuthGuardEcm]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
