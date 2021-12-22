import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Util} from "../utils/util";

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${Util.getToken()}`);
  }

  /**
   * Responsável por listar países
   *
   */
  public listarPais(): Observable<any> {

    return this.http.get(`${environment.url_api}/nations`, {
      headers: this.headers,
    });
  }

  /**
   * Responsável por listar estados
   *
   * @param id
   */
  public listarEstados(id: number): Observable<any> {
    let params = new HttpParams()
      .set("id", id);

    return this.http.get(`${environment.url_api}/states`, {
      headers: this.headers,
      params: params,
    });
  }

  /**
   * Responsável por listar cidades
   *
   * @param id
   */
  public listarCidades(id: number): Observable<any> {
    let params = new HttpParams()
      .set("id", id);

    return this.http.get(`${environment.url_api}/cities`, {
      headers: this.headers,
      params: params,
    });
  }
}
