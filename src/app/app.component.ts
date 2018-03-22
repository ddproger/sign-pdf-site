import {Component} from '@angular/core';
import {AuthenticationService, NotificationService, SitesService, TranslationService} from '@alfresco/adf-core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false;
  sites: any;

  constructor(translationService: TranslationService,
              private authService: AuthenticationService,
              private router: Router,
              private siteService: SitesService,
              private notifyService: NotificationService) {

    this.isLogin = this.authService.isLoggedIn();
    console.log(this.isLogin);
    this.authService.onLogin.asObservable().subscribe(() => {
      this.isLogin = true;
      this.updateSites();
    });
    if (this.isLogin) {
      this.updateSites();
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login'])
        .then(() => {
          this.isLogin = false;
          this.sites = null;
        })
        .catch((err) => console.log(err));
    });
  }

  GoToSite(siteId: string) {
    this.router.navigate(['/site', siteId]).catch(() =>
      this.notifyService.openSnackMessage(`cannot open site ${siteId}`)
    );
  }

  updateSites() {
    this.siteService.getSites().subscribe(res => {
      this.sites = res;
    },
      err => {
        console.error(`cannot load sites:\n${err}`);
      });
  }
}
