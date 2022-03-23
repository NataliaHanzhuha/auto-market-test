import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
    private readonly url = 'http://almond-platform.com:7015/auto-market/landing-page/public';
    constructor(private http: HttpClient) {}

    getCars(): Observable<any> {
        return this.http.get(this.url);
    }
}
