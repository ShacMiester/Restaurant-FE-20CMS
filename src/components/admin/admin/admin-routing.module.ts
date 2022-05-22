import { MenuItemSpecialStandAloneFormComponent } from './../components/views/menu/menu-item-special-stand-alone-form/menu-item-special-stand-alone-form.component';
import { MenuCategoriesFormComponent } from './../components/views/menu/menu-categories-form/menu-categories-form.component';
import { MenuCategoriesComponent } from './../components/views/menu/menu-categories/menu-categories.component';
import { MenuTableComponent } from './../components/views/menu/menu-table/menu-table.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenOrdersComponent } from '../components/views/kitchen/kitchen-orders/kitchen-orders.component';

const routes: Routes = [{
  component: AdminComponent,
  path: '',
  children:
    [
      {
        path: 'dashboard', loadChildren: () =>
          import('../components/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'reservations', loadChildren: () =>
          import('../components/views/reservation-table/reservation-table.module').then(m => m.ReservationTableModule)
      },
      { path: 'menu-items', component: MenuTableComponent },//review
      { path: 'menu-categories', component: MenuCategoriesComponent },//review
      { path: 'menu-categories-form', component: MenuCategoriesFormComponent },//review
      {
        path: 'catering-table', loadChildren: () =>
          import('../components/views/catering-table/catering-table.module').then(m => m.CateringTableModule)
      },
      {
        path: 'weekly-deals-table', loadChildren: () =>
          import('../components/views/weekly-deals/weekly-deals-table/weekly-deals-table.module').then(m => m.WeeklyDealsTableModule)
      },
      {
        path: 'weekly-deals-form', loadChildren: () =>
          import('../components/views/weekly-deals/weekly-deals-form/weekly-deals-form.module').then(m => m.WeeklyDealsFormModule)
      },
      {
        path: 'carousel-items-table', loadChildren: () =>
          import('../components/views/carousel-table/carousel-table-routing.module').then(m => m.CarouselTableRoutingModule)
      },
      {
        path: 'branches', loadChildren: () =>
          import('../components/views/branches/branches/branches.module').then(m => m.BranchesModule)
      },
      {
        path: 'branches-form', loadChildren: () =>
          import('../components/views/branches/branches-managment/branches-management.module').then(m => m.BranchesManagementModule)
      },
      {
        path: 'working-hours', loadChildren: () =>
          import('../components/views/working-hours/working-hours.module').then(m => m.WorkingHoursModule)
      },
      {
        path: 'working-hours-form', loadChildren: () =>
          import('../components/views/working-hours/working-hours-form/working-hours-form.module').then(m => m.WorkingHoursFormModule)
      },
      {
        path: 'menu-standAlone-form', loadChildren: () =>
          import('../components/views/menu/menu-stand-alone-form/menu-stand-alone-form.module').then(m => m.MenuStandAloneFormModule)
      },//review
      {
        path: 'menu-standAlone-table', loadChildren: () =>
          import('../components/views/menu/menu-stand-alone-table/menu-item-stand-alone-table-module.module').then(m => m.MenuItemStandAloneTableModule)
      },
      {
        path: 'menu-item-special-form',
        component: MenuItemSpecialStandAloneFormComponent
      },
      {
        path: 'menu-items-special-table',
        loadChildren: () =>
          import('../components/views/menu/special-items-table/special-items-table.module').then(m => m.SpecialItemsTableModule)
      },
      {
        path: 'menu-items-options',
        loadChildren: () =>
          import('../components/views/menu/options-form-to-be-renamed/options-form-to-be-renamed.module').then(m => m.OptionsFormToBeRenamedModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../components/views/refunds/refunds.module').then(m => m.RefundsModule)
      },
      {
        path: 'kitchen',
        component: KitchenOrdersComponent
      },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
