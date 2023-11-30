import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPackage } from '../models/packageType';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  getPackages(): Observable<IPackage[]> {
    const url = 'http://localhost:3000/packages';

    const options = { withCredentials: true };

    return this.http.get<IPackage[]>(url, options);
  }

  getDependencies(packageId: string): Observable<string[]> {
    const encodedPackageId = encodeURIComponent(packageId);
    const url = `http://localhost:3000/packages/${encodedPackageId}/dependencies`;
    return this.http.get<string[]>(url);
  }
}
