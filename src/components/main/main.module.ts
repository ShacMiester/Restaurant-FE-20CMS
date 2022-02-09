import { MenuItemsComponent } from './../menu/menu-items/menu-items.component';
import { MenuPreFaceComponent } from './../menu/menu-pre-face/menu-pre-face.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [MainComponent, HeaderComponent, MenuPreFaceComponent, MenuItemsComponent],
  imports: [CommonModule, NgbModule, MatButtonModule,MatCardModule],
  exports: [MainComponent],
  providers: []
})
export class MainModule { }
