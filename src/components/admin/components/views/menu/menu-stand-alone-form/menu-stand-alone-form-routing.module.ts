import { MenuStandAloneFormComponent } from './menu-stand-alone-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MenuStandAloneFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuStandAloneFormRoutingModule { }
