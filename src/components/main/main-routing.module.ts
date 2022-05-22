import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catering', loadChildren: () => import('../catering/catering.module').then(m => m.CateringModule) },
  { path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderModule) },
  { path: 'success', redirectTo: 'order' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
