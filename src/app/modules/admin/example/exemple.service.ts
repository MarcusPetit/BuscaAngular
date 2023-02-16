import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fonte } from './exemple.model';

@Injectable({
    providedIn: 'root',
})
export class ExempleService {
    private endpoint = 'https://vmageste.com.br/wp/wp-json/vm/v1/fontes/1';

    constructor(private http: HttpClient) {}

    getFonte(): Observable<Fonte> {
        return this.http.get<Fonte>(this.endpoint);
    }
    getData(searchParams: any): Observable<Fonte[]> {
        let params = new HttpParams();
        params = params.set('search', searchParams.searchTerm);
        params = params.set('fields', searchParams.fields.join(','));

        return this.http.get<Fonte[]>(`${this.endpoint}`, { params: params });
    }
}
