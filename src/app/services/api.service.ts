import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    url: string = environment.baseUrl + '?limit=100';

    constructor(private http: HttpClient) {}
    
    // get programs on load application
    getAllPrograms() {
        return this.http.get<any>(this.url);
    }

    // get programs on filter
    getFilterProgram(filterValue) {
        return this.http.get<any>(this.url + filterValue);
    }
}