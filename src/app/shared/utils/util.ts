import {environment} from "../../../environments/environment";

export class Util {

  /**
   * Verifica existencia de token
   */
  static isAutentificado() {
    return !!localStorage.getItem(environment.name_storage);
  }
}
