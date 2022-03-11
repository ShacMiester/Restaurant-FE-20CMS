import { MenuCategoriesFormComponent } from './../components/views/menu/menu-categories-form/menu-categories-form.component';
import { MenuFormComponent } from './../components/views/menu/menu-form/menu-form.component';
import { MenuCategoriesComponent } from './../components/views/menu/menu-categories/menu-categories.component';
import { MenuTableComponent } from './../components/views/menu/menu-table/menu-table.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  component: AdminComponent,
  path: '',
  children:
    [
      { path: 'dashboard', loadChildren: () => import('../components/views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'menu-items', component: MenuTableComponent },//review
      { path: 'menu-categories', component: MenuCategoriesComponent },//review
      { path: "menu-items-forms", component: MenuFormComponent },//review
      { path: 'menu-categories-form', component: MenuCategoriesFormComponent },//review
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
