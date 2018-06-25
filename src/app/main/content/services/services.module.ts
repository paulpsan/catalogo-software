import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioService } from "./usuario.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [UsuarioService]
})
export class ServicesModule {}
