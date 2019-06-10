import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Contact } from './Contact';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ContactService {
    //private baseUrl = "http://localhost:8080/api/contacts/";
    private baseUrl = "/api/contacts/";
    searchTextSubject = new BehaviorSubject<string>('');

    constructor(private http: HttpClient, private authService: AuthService) {
        
    }

    public searchObservable(){
       
        return this.searchTextSubject.asObservable();
    
    }

    private getHeaders(): any {
        let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'JWT '+this.authService.token
            });
        return { headers: headers, observe:'body', responseType: 'json', withCredentials:true };
    }
   

    public findAll(): Observable<any> {
        return this.http.get(`${this.baseUrl}`, this.getHeaders())
    }

    public findById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`, this.getHeaders())
    }

    public saveContact(contact): Observable<any>{
        return this.http.post(`${this.baseUrl}`, contact, this.getHeaders())
    }

    public createContact(contact): Observable<any>{
        return this.http.put(`${this.baseUrl}`, contact, this.getHeaders())
    }

    public removeContact(id): Observable<boolean>{
        return this.http.delete(`${this.baseUrl}/${id}`,
        { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'JWT '+this.authService.token
            }), observe: 'response', responseType: 'json' })
        .map((response: HttpResponse<any>) => {
            if(response.ok){
                return true;
            }
            return false;
        });
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}