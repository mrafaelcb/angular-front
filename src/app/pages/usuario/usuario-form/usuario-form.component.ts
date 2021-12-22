import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuarioClientService} from "../shared/usuario-client/usuario-client.service";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  public form: FormGroup;
  public funcao;
  public user: any;

  constructor(
    route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private usuarioClientService: UsuarioClientService,
  ) {
    this.funcao = route.snapshot.data.funcao;
    this.user = this.router.getCurrentNavigation().extras?.state?.user;

  }

  ngOnInit(): void {
    this.constuirForm();

    if (this.isVizualizar() || this.isEditar()) {
      if (this.user == null) {
        this.router.navigateByUrl('user/list')
      } else {

        this.form.patchValue(this.user);

        this.form.get('data_nascimento').patchValue(this.formatDate(this.user.data_nascimento));
        this.form.get('password').setValue(null);
      }
    }
  }

  /**
   * Responsável por contruir o form
   */
  constuirForm() {
    this.form = this.formBuilder.group({
      id: null,
      nome: [null, [Validators.required, Validators.min(10)]],
      data_nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      rg: [null, [Validators.required, Validators.min(6)]],
      password: [null, [Validators.required, Validators.min(6)]],
    });
  }

  /**
   * Responsável por verificar tipo funcao vizualizar
   */
  isVizualizar() {
    return this.funcao === 'details';
  }

  /**
   * Responsável por verificar tipo funcao editar
   */
  isEditar() {
    return this.funcao === 'edit';
  }

  /**
   * Responsável por verificar tipo funcao salvar
   */
  isCadastrar() {
    return this.funcao === 'new';
  }

  /**
   * Responsável por salvar e editar
   */
  salvar() {
    if (this.isEditar()) {
      this.usuarioClientService.edit(this.form.value)
        .subscribe(res => {
            this._snackBar.open(res.message)
            this.voltar();
          },
          (error) => {
            this._snackBar.open(error.error.message);
          });
    } else {
      this.usuarioClientService.save(this.form.value)
        .subscribe(res => {
            this._snackBar.open(res.message)
            this.voltar();
          },
          (error) => {
            this._snackBar.open(error.error.message);
          });
    }
  }

  /**
   * Responsável por formatar data
   *
   * @param date
   * @private
   */
  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  voltar() {
    this.router.navigateByUrl('user/list');
  }
}
