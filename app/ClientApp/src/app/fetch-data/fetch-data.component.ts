import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private oauthService: OAuthService) {
    var headers = new HttpHeaders({
      "Authorization": "Bearer " + this.oauthService.getAccessToken()
    });


    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts', { headers: headers }).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


interface ServiceDurum {

}

