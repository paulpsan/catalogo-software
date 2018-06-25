import { environment } from "environments/environment";
import { Usuario } from "../models/usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService {
  usuario: Usuario;
  private url: string;

  constructor(public router: Router, private _http: HttpClient) {
    this.url = environment.url;
  }
  logout() {
    this.usuario = null;
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.router.navigate(["/login"]);
  }
  login(usuario: Usuario) {
    let urlApi = this.url + "auth/local";
    return this._http.post(urlApi, usuario);
  }
}
