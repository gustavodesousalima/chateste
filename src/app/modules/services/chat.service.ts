// service: chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceAnalysis } from '../models/service-analysis.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = 'http://127.0.0.1:5000/services';

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceAnalysis[]> {
    return this.http.get<ServiceAnalysis[]>(this.apiUrl);
  }

  getServiceById(id: string): Observable<ServiceAnalysis | undefined> {
    return this.http.get<ServiceAnalysis>(`${this.apiUrl}/${id}`);
  }
}
