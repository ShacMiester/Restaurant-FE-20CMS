import { environment } from './../../../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-options-form-to-be-renamed',
  templateUrl: './options-form-to-be-renamed.component.html',
  styleUrls: ['./options-form-to-be-renamed.component.scss'],
})
export class OptionsFormToBeRenamedComponent
  extends CrudService<any, number>
  implements OnInit {
  optionsForm: UntypedFormGroup = new UntypedFormGroup({});
  type: 'add' | 'edit';
  paramID: number = 0;
  optionID: number;
  constructor(
    private fb: UntypedFormBuilder,
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private snackBarService: SnackbarService,
    private route: Router
  ) {
    super(_http, 'MenuItems/UpdateOrCreateCategoriesWithOptions');
  }

  ngOnInit() {
    this.constructForm();
    this.getFormValues();
  }

  getFormValues() {
    this.router.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.paramID = params.id;
        this.type = 'edit';
        this._http
          .get(
            environment.storeApi +
            '/MenuItemOptionCategories/getByItemId?id=' +
            params.id
          )
          .subscribe((options: any) => {
            if (options.length) {
              options.forEach((opt, index) => {
                // opt['itemId'] = parseInt(params.id);
                this.addOption(opt);
                opt.itemOptions.map((o) => {
                  this.addOptionOptions(index, o);
                }
                );
              });
            } else this.type = 'add';

            this.optionsForm.patchValue(options);
          });
      }
    });
  }

  constructForm() {
    this.optionsForm = this.fb.group({
      itemOptions: this.fb.array([]),
    });
  }

  options(): UntypedFormArray {
    return this.optionsForm.get('itemOptions') as UntypedFormArray;
  }

  newOption(
    obj: any = { name: '', min: 0, max: 0, id: 0 }
  ): UntypedFormGroup {
    return this.fb.group({
      name: new UntypedFormControl(obj.name, Validators.required),
      min: new UntypedFormControl(obj.min),
      max: new UntypedFormControl(obj.max),
      itemOptions: this.fb.array([]),
      id: new UntypedFormControl(obj.id || 0)
    });
  }

  addOption(opt = {}) {
    this.options().push(this.newOption(opt));
  }
  deletedOptions = []

  removeOption(optionIndex: number, option) {
    this.deletedOptions.push(option.value)
    this.options().removeAt(optionIndex);
  }

  optionOptions(empIndex: number): UntypedFormArray {
    return this.options().at(empIndex).get('itemOptions') as UntypedFormArray;
  }

  newOptionOptions(obj: any = {}): UntypedFormGroup {
    return this.fb.group({
      id: obj.id || 0,
      name: obj.name || '',
      description: obj.description || '',
      imageURL: obj.imageURL || '',
      addtionalPrice: obj.addtionalPrice || 0,
    });
  }

  addOptionOptions(empIndex: number, o) {
    this.optionOptions(empIndex).push(this.newOptionOptions(o));
  }

  removeOptionOptions(empIndex: number, skillIndex: number) {
    this.optionOptions(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    this.save(this.optionsForm.controls['itemOptions'].value, `?itemId=${this.paramID}`).subscribe({
      error: (err) => {
        this.snackBarService.error('An error has occurred');
      },
      complete: () => {
        this.snackBarService.success(
          'Menu item options updated successfully'
        );
        this.route.navigate(['/admin', 'menu-standAlone-table'])
      },
    });
  }
}
