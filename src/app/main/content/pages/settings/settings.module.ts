import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./settings.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material";
const routes = [
  {
    path: "settings",
    component: SettingsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [SettingsComponent]
})
export class SettingsModule {}
