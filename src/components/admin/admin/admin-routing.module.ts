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
      { path: 'menu-items', component: MenuTableComponent },
      { path: 'menu-categories', component: MenuCategoriesComponent },
      { path: "menu-items-forms", component: MenuFormComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
