import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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
    this.router.navigateByUrl('').then(() => {
    });
  }

  /**
   * Responsável por redirecionar para tela de login
   */
  login() {
    this.router.navigateByUrl('auth/login').then(() => {
    });
  }
}
