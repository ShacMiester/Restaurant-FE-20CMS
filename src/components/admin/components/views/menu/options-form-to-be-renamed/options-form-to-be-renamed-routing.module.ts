import { OptionsFormToBeRenamedComponent } from './options-form-to-be-renamed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OptionsFormToBeRenamedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsFormToBeRenamedRoutingModule { }
