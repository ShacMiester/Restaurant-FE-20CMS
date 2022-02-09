// import { AuthInterceptorService } from './../services/auth-interceptor.service';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { UserService } from '../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../components/footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from '../components/forms/forms.component';
import { AuthInterceptorService } from '../services/auth-interceptor.service';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule, NgbCollapseModule,ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [UserService,AuthInterceptorService],
})
export class SharedModule { }
