import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListarComponent } from "./listar.component";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "listar",
    component: ListarComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],

  declarations: [ListarComponent]
})
export class ListarModule {}
