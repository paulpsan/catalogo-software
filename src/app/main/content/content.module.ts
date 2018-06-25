import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseContentComponent } from 'app/main/content/content.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [FuseContentComponent],
  imports: [RouterModule, FuseSharedModule, ServicesModule],
  exports: [FuseContentComponent]
})
export class FuseContentModule {}
