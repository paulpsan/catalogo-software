import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit() {

    
    this.userForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    console.log(this.userForm.valid);
    if (this.userForm.valid) {
      let usuario = {
        nombre: this.userForm.controls["nombre"].value,
        descripcion: this.userForm.controls["descripcion"].value
      };
      // if (this.imagenSubir) {
      //   this._subirArchivoService
      //     .subirArchivo(this.imagenSubir, "usuarios", this.id)
      //     .then((resp: any) => {
      //       usuario.avatar = resp.usuario.avatar;
      //       this._usuarioService.actualizarUsuario(usuario).subscribe();
      //     });
      // } else {
      //   this._usuarioService.actualizarUsuario(usuario).subscribe();
      // }

      // this._httpService.editar("usuarios", usuario).subscribe(resp => {
      //   console.log(resp);
      //   this._usuarioService.guardarStorage(resp);
      // });
    }
  }
}
