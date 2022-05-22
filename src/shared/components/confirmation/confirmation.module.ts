import { ConfirmationService } from './confirmation.service';
import { ConfirmationComponent } from './confirmation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [ConfirmationService]
})
export class ConfirmationModule { }
