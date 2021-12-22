import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Util} from "../../../../shared/utils/util";

@Injectable({
  providedIn: 'root'
})
export class UsuarioClientService {

  path = '/user';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${Util.getToken()}`);
  }

  /**
   * Responsável por validar login com backend
   *
   * @param pagina
   * @param quantidade
   */
  public filtro(pagina: any, quantidade: any): Observable<any> {
    let params = new HttpParams()
      .set("page", pagina + 1)
      .set("per_page", quantidade);

    return this.http.get(`${environment.url_api}/users`, {
      headers: this.headers,
      params: params,
    });
  }

  public deletar($id: number): Observable<any> {
    let params = new HttpParams()
      .set("id", $id);

    return this.http.delete(`${environment.url_api + this.path}`, {
      headers: this.headers,
      params: params,
    });
  }

  public edit(data: any): Observable<any> {
    return this.http.put(`${environment.url_api + this.path}`, data, {
      headers: this.headers,
    });
  }

  public save(data: any): Observable<any> {
    return this.http.post(`${environment.url_api + this.path}`, data);
  }
}
