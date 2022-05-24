import { PaymentComponent } from './../components/payment/payment.component';
import { MenuItemsComponent } from '../components/menu/menu-items/menu-items.component';
import { MainComponent } from '../components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('../components/main/main.module').then(m => m.MainModule) },
{ path: 'menu', component: MenuItemsComponent },
{ path: 'admin', loadChildren: () => import('../components/admin/admin/admin.module').then(m => m.AdminModule) },
{ path: 'page-not-found', loadChildren: () => import('../shared/components/not-found/not-found.module').then(m => m.NotFoundModule) },
{ path: "payment", loadChildren: () => import('../components/payment/payment.module').then(m => m.PaymentModule) },
{ path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',anchorScrolling:'enabled',scrollOffset:[100,100] ,onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
