import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoriesService {
  categories:any = [{ Name: 'meat', id: 1 }, { Name: 'chicken', id: 2 }, { Name: 'rice', id: 3 }]

  getMenuCategories(): Observable<any> {
    return of(this.categories);
  }
  getMenuCategoryForm(): Observable<any> {
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'Name',
        label: 'Category name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  save(item : any){
    this.categories.map((items:any)=>{
      if(item.id == items.id)
      items.name = item.name
    })
  }
}
