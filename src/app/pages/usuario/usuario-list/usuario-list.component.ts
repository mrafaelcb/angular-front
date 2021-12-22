import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UsuarioClientService} from "../shared/usuario-client/usuario-client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'data_nascimento', 'cpf', 'rg', 'data_criacao', 'acoes'];
  public dataSource: MatTableDataSource<any>;
  public total: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   *
   * @param usuarioClientService
   * @param _snackBar
   * @param router
   */
  constructor(
    private usuarioClientService: UsuarioClientService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.pesquisar();
  }

  /**
   * Responsável por pegar ação de mudança de página
   */
  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.pesquisar(this.paginator.pageIndex, this.paginator.pageSize))
      )
      .subscribe();
  }

  /**
   * Responsável por listar usuários
   *
   * @param $page
   * @param $quantidade
   */
  pesquisar(page = 0, quantidade = 5) {
    this.usuarioClientService.filtro(page, quantidade)
      .subscribe(res => {
          this.dataSource.data = res.data[0];
          this.total = res.data[1];
        },
        (error) => {
          this._snackBar.open(error.error.message);
          this.dataSource.data = [];
        });
  }

  /**
   * Responsável por deletar usuário
   *
   * @param id
   */
  deletar(id: number) {
    this.usuarioClientService.deletar(id)
      .subscribe(res => {
          this._snackBar.open(res.message)
          this.pesquisar(this.paginator.pageIndex, this.paginator.pageSize);
        },
        (error) => {
          this._snackBar.open(error.error.message);
        });
  }

  /**
   * Responsável por ir para tela de editar
   *
   * @param element
   */
  editar(element: any) {
    this.router.navigate([`user/${element.id}/edit`], {
      state: {user: element}
    });
  }
}
