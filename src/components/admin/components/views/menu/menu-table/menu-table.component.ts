import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  // styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  dataSource = []
  constructor(private MenuService: MenuService,private router:Router) { }

  ngOnInit(): void {
    this.MenuService.getMenuItems().subscribe(items => {
      this.dataSource = items
    })
  }

  performAction(event: { row: any, action: 'edit' | 'delete' }) {
    console.log(event.row)
    switch (event.action) {
      case 'edit':
        console.log('editing')
        this.router.navigate(['/admin','menu-items-forms'],{queryParams:{id:event.row.id,type:event.action}})
        break;
      case 'delete':
        //delete
        this.dataSource.forEach((element:any,index) => {
          if(element.id == event.row.id)
          {
            console.log('found')
            this.dataSource.splice(index,10)
            console.log(this.dataSource)
          }
        });
        // this.MenuService.removeItem(event.row.id)
        console.log('delete')
        break;
      default:
        break;
    }
  }
}
