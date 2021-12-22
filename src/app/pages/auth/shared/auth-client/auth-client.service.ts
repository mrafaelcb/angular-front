import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  path = '/auth';


  constructor(private http: HttpClient) {
  }

  /**
   * Responsável por validar login com backend
   *
   * @param login
   */
  public login(login: any): Observable<any> {
    return this.http.post(`${environment.url_api}/login`, login);
  }
}
