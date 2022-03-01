import { GridistComponent } from './../components/gridist/gridist.component';
import { HrComponent } from './../components/hr/hr.component';
import { CarouselComponent } from './../components/carousel/carousel.component';
// import { AuthInterceptorService } from './../services/auth-interceptor.service';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { UserService } from '../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../components/footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from '../services/auth-interceptor.service';
import { RouterModule } from "@angular/router";
import { DescriptiveBlockComponent } from '../components/descriptive-block/descriptive-block.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../components/menu/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DynamicFormsAppModule } from '../dynamic-forms-app/dynamic-forms-app.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from "@angular/material/table";
import { TableComponent } from '../components/table/table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [NavbarComponent, FooterComponent, CarouselComponent, DescriptiveBlockComponent, HrComponent, GridistComponent, ModalComponent, TableComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule, NgbCollapseModule, ReactiveFormsModule, NgbCarouselModule, RouterModule, MatGridListModule, MatDialogModule, FormsModule, DynamicFormsAppModule, MatSidenavModule, MatTableModule, MatTooltipModule],
  exports: [NavbarComponent, FooterComponent, CarouselComponent, DescriptiveBlockComponent, HrComponent, GridistComponent, ModalComponent, MatSidenavModule, MatButtonModule, MatIconModule, MatBadgeModule, MatExpansionModule, FormsModule, DynamicFormsAppModule, MatTableModule, TableComponent, MatTooltipModule,MatCardModule,RouterModule],
  providers: [UserService, AuthInterceptorService],
})
export class SharedModule { }
