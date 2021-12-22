import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthClientService} from "../shared/auth-client/auth-client.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Util} from "../../../shared/utils/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authClientService: AuthClientService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    if (Util.isAutentificado()) {
      this.router.navigateByUrl('user/list');
    }
  }

  ngOnInit(): void {
    this.constuirForm();
  }

  /**
   * Responsável por contruir o form
   */
  constuirForm() {
    this.form = this.formBuilder.group({
      cpf: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.min(6)]]
    });
  }

  /**
   * Reponsável por efetuar login
   */
  entrar() {
    this.authClientService.login(this.form.value).subscribe((res) => {
        Util.salvarToken(res.data.token);
        this.router.navigateByUrl('/user');
      },
      (error) => {
        this._snackBar.open(error.error.message);
      });
  }

}
