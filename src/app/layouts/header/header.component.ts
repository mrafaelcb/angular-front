import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Util} from "../../shared/utils/util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Responsável por redirecionar para tela inicial
   */
  home() {
    this.router.navigateByUrl('');
  }

  /**
   * Responsável por redirecionar para tela de login
   */
  login() {
    this.router.navigateByUrl('auth/login');
  }

  /**
   * verifica se está na rota de login
   */
  isLogin() {
    return this.router.url == '/auth/login';
  }

  /**
   * Verifica existencia de token
   */
  isAutentificado() {
    return Util.isAutentificado();
  }

  /**
   * Responsável por sair da aplicação
   */
  sair() {
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
  }

  user() {
    this.router.navigateByUrl('user/list');
  }
}
