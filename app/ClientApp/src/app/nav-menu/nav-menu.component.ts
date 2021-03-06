import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private oauthService: OAuthService) { }

  login() { this.oauthService.initImplicitFlow(); }
  logout() { this.oauthService.logOut(); }

  get givenName() {
    let claims : any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims.given_name;
  }

}
