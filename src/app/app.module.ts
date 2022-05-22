import { DynamicFormsAppModule } from '../shared/dynamic-forms-app/dynamic-forms-app.module';
import { HeaderService } from '../services/header.service';
import { AuthInterceptorService } from 'src/shared/services/auth-interceptor.service';
import { SharedModule } from '../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from 'src/components/main/main.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule, MainModule,
    HttpClientModule,
    DynamicFormsAppModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
