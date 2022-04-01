import { SharedModule } from 'src/shared/modules/shared.module';
import { BranchesManagementComponent } from './branches-management.component';
import { UnifiedTableModule } from './../../../../../../shared/components/unified-table/unified-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BranchesManagementRoutingModule } from './branches-management-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BranchesManagementComponent],
  imports: [
    CommonModule,
    BranchesManagementRoutingModule,
    UnifiedTableModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ]
})
export class BranchesManagementModule { }
