import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, Router} from "@angular/router";
import {DomainService} from "./domain.service";


@Injectable()
export class CidadesResolve implements Resolve<any> {

  constructor(
    private router: Router,
    private domainService: DomainService
  ) {
  }

  /**
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      this.domainService.listarCidades(9).subscribe(data => {
          observer.next(data.data);
          observer.complete();
        },
        error => {
          observer.error(error);
          this.router.navigateByUrl("");
        });
    });
  }
}
