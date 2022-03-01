import { AdminPanelService } from './../services/admin-panel.service';
import { MenuFormComponent } from './../components/views/menu/menu-form/menu-form.component';
import { MenuTableComponent } from './../components/views/menu/menu-table/menu-table.component';
import { MenuCategoriesFormComponent } from './../components/views/menu/menu-categories-form/menu-categories-form.component';
import { MenuCategoriesComponent } from './../components/views/menu/menu-categories/menu-categories.component';
import { SharedModule } from './../../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component'
import { MatListModule } from "@angular/material/list";

import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AdminComponent,
    MenuCategoriesComponent,
    MenuCategoriesFormComponent,
    MenuTableComponent,
    MenuFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [AdminPanelService]
})
export class AdminModule { }
