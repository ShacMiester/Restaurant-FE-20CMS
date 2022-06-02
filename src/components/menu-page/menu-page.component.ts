import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../admin/services/crud.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent extends CrudService<any, number> implements OnInit {
  itemList: any[] = [];
  constructor(
    protected _http: HttpClient
  ) {
    super(_http, 'menuCategories/withItems')
   }

  ngOnInit(): void {
    this.getAllItems();
  }
  getAllItems(){
    this.findAll().subscribe(data => {
      this.itemList = data;
    });
  }
}
