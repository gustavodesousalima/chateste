// service: chat.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceAnalysis } from '../models/service-analysis.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private services: ServiceAnalysis[] = [
    {
      id: 'ec2',
      name: 'EC2',
      status: 'Healthy',
      details: 'EC2 instances running smoothly.',
      history: [
        { date: '2023-10-01', details: 'EC2 had a minor issue.' },
        { date: '2023-09-15', details: 'EC2 was updated.' }
      ]
    },
    {
      id: 'eks',
      name: 'EKS',
      status: 'Warning',
      details: 'EKS cluster experiencing minor issues.',
      history: [
        { date: '2023-10-02', details: 'EKS had a major issue.' },
        { date: '2023-09-20', details: 'EKS was updated.' }
      ]
    },
    {
      id: 's3',
      name: 'S3',
      status: 'Healthy',
      details: 'S3 storage is optimal.',
      history: [
        { date: '2023-10-03', details: 'S3 had a minor issue.' },
        { date: '2023-09-25', details: 'S3 was updated.' }
      ]
    },
    {
      id: 'cloudfront',
      name: 'CloudFront',
      status: 'Critical',
      details: 'CloudFront has significant latency issues.',
      history: [
        { date: '2023-10-04', details: 'CloudFront had a major issue.' },
        { date: '2023-09-30', details: 'CloudFront was updated.' }
      ]
    },
    {
      id: 'cloudete',
      name: 'Cloudedete',
      status: 'Há esperança',
      details: 'Cloudetete has significant latency issues teste.',
      history: [
        { date: '2023-10-05', details: 'Cloudetete had a major issue.' },
        { date: '2023-09-28', details: 'Cloudetete was updated.' }
      ]
    }
  ];

  getServices(): Observable<ServiceAnalysis[]> {
    return of(this.services);
  }

  getServiceById(id: string): Observable<ServiceAnalysis | undefined> {
    return of(this.services.find(service => service.id === id));
  }
}