import { UnifiedTableModule } from './../../../../../../shared/components/unified-table/unified-table.module';
import { BranchesComponent } from './branches.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [BranchesComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    UnifiedTableModule,
    MatSnackBarModule
  ]
})
export class BranchesModule { }
