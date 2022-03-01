import { MenuItemsComponent } from './../components/menu/menu-items/menu-items.component';
import { MainComponent } from './../components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MainComponent },
{ path: 'menu', component: MenuItemsComponent },
{ path: 'admin', loadChildren: () => import('../components/admin/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
