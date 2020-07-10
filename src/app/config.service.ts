import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private appConfig;

  constructor(private injector: Injector) {}

  loadConfig() {
    let http = this.injector.get(HttpClient);
    return http
      .get('/assets/config.json')
      .toPromise()
      .then((data) => {
        // console.log(data);
        this.appConfig = data;
      });
  }

  get config() {
    return this.appConfig;
  }
}
