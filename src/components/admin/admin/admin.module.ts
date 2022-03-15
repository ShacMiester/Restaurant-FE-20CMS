import { CateringDetailsComponent } from './../components/views/catering-table/catering-details/catering-details.component';
import { AdminPanelService } from './../services/admin-panel.service';
import { MenuFormComponent } from './../components/views/menu/menu-form/menu-form.component';
import { MenuTableComponent } from './../components/views/menu/menu-table/menu-table.component';
import { MenuCategoriesFormComponent } from './../components/views/menu/menu-categories-form/menu-categories-form.component';
import { MenuCategoriesComponent } from './../components/views/menu/menu-categories/menu-categories.component';
import { SharedModule } from './../../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from "../components/views/user-info/user-info.component";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component'
import { MatListModule } from "@angular/material/list";

import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from "@angular/material/dialog";
import { ReservationDetailsComponent } from "../components/views/reservation-table/reservation-details/reservation-details.component";


@NgModule({
  declarations: [
    AdminComponent,
    MenuCategoriesComponent,
    MenuCategoriesFormComponent,
    MenuTableComponent,
    MenuFormComponent,
    UserInfoComponent,
    CateringDetailsComponent,
    ReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatSnackBarModule,
    MatDialogModule
    ],
  providers: [AdminPanelService]
})
export class AdminModule { }
