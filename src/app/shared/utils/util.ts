import {environment} from "../../../environments/environment";

export class Util {

  /**
   * Verifica existencia de token
   */
  static isAutentificado() {
    return !!localStorage.getItem(environment.name_storage);
  }

  /**
   * Retornar token
   */
  static getToken() {
    return localStorage.getItem(environment.name_storage);
  }

  /**
   * Salva token no storage
   *
   * @param token
   */
  static salvarToken(token: any){
    localStorage.setItem(environment.name_storage, token);
  }
}
