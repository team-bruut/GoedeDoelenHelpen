import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCharity } from './searchCharity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventRegisterService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
  ) { }

  public searchCharity(q: string): Observable<SearchCharity[]> {
    return this.http.post<SearchCharity[]>(`${this.baseUrl}api/Foundations/Search`, { q: q});
  }
}
