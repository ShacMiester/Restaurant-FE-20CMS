import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/components/admin/admin/admin.component';

const routes: Routes = [{
  component: AdminComponent, loadChildren: () => import('../components/admin/admin/admin.module').then(m => m.AdminModule),
  path:'admin'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
