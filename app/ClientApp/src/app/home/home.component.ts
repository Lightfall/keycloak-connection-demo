import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
    
  }

  get claimsJson() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    let data : string = JSON.stringify(claims);
    return data;
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }

  get accessTokenJson() {
    let bisey = this.accessToken;
    if (bisey) {
      let part1 = window.atob(bisey.split(".")[0]);
      let part2 = window.atob(bisey.split(".")[1]);
      let result = JSON.stringify(JSON.parse(part1), null, 1) + JSON.stringify(JSON.parse(part2), null, 1);
      result = result.replace(/(?:\r\n|\r|\n)/g, '<br>');
      return result;
    }
    return "";
  }

  get idTokenJson() {
    let bisey = this.idToken;
    if (bisey) {
      let part1 = window.atob(bisey.split(".")[0]);
      let part2 = window.atob(bisey.split(".")[1]);
      let result = JSON.stringify(JSON.parse(part1), null, 1) + JSON.stringify(JSON.parse(part2), null, 1);
      result = result.replace(/(?:\r\n|\r|\n)/g, '<br>');
      return result;
    }
    return "";
  }
}
