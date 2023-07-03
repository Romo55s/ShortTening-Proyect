import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenService {
  private apiUrl = 'https://api.shrtco.de/v2';

  constructor(private http: HttpClient) { }

  shortenUrl(url: string): Observable<ShortenResponse> {
    const requestUrl = `${this.apiUrl}/shorten?url=${encodeURIComponent(url)}`;
    return this.http.get<ShortenResponse>(requestUrl);
  }

  getLinkInfo(code: string): Observable<LinkInfoResponse> {
    const requestUrl = `${this.apiUrl}/info?code=${code}`;
    return this.http.get<LinkInfoResponse>(requestUrl);
  }
}

interface ShortenResponse {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

interface LinkInfoResponse {
  ok: boolean;
  result: {
    code: string;
    url: string;
    password_protected: boolean;
    blocked: boolean;
    created: string;
  };
}
