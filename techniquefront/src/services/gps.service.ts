import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GpsService {
    constructor(private http: HttpClient) { }
    url = 'http://localhost:8080';
    getListCoord() {
        return this
            .http
            .get(`${this.url}/gps/listcoor`)
            .pipe(map((resp) => resp));;
    }

    uploadCoord(file: File) {
        const formData = new FormData();
        if (file !== undefined) {
            formData.append('file', file);
        }
        return this
            .http
            .post(`${this.url}/gps/upload`, formData)
            .pipe(map((resp) => resp));
    }
}