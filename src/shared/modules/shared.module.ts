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
import { DynamicFormBuilderModule } from "../components/forms/form builder/dynamic-form-builder.module";
import { FormsComponent } from "../components/forms/forms.component";



@NgModule({
  declarations: [NavbarComponent, FooterComponent, CarouselComponent, FormsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule, NgbCollapseModule, ReactiveFormsModule, NgbCarouselModule, RouterModule, DynamicFormBuilderModule],
  exports: [NavbarComponent, FooterComponent, CarouselComponent, DynamicFormBuilderModule, FormsComponent],
  providers: [UserService, AuthInterceptorService],
})
export class SharedModule { }
