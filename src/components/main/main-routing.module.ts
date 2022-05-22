import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from '../menu-page/menu-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catering', loadChildren: () => import('../catering/catering.module').then(m => m.CateringModule) },
  { path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderModule) },
  { path: 'success', redirectTo: 'order' },
  { path: 'menu-page', component: MenuPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
