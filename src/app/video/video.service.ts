import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchVideos(filter: any, pageToken: string) {
    return this.http.get(`${this.apiUrl}/videos`, {
      params: {
        key: environment.apiKey,
        part: 'snippet,statistics',
        maxResults: 15,
        pageToken,
        ...filter,
      },
    });
  }
}
