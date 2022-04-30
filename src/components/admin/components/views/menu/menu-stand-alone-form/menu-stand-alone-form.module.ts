import { SharedModule } from 'src/shared/modules/shared.module';
import { MenuStandAloneFormComponent } from './menu-stand-alone-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuStandAloneFormRoutingModule } from './menu-stand-alone-form-routing.module';


@NgModule({
  declarations: [MenuStandAloneFormComponent],
  imports: [
    CommonModule,
    MenuStandAloneFormRoutingModule,
    SharedModule

  ]
})
export class MenuStandAloneFormModule { }
