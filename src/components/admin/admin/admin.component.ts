import { AdminPanelService } from './../services/admin-panel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminPanelService]
})
export class AdminComponent implements OnInit {
  panelOpenState = false
  templateForm$: any = []
  sideMenuItems$: any = []
  constructor(
    private menuService: MenuService,
    private AdminPanelService: AdminPanelService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenuCategoryForm().subscribe(items => { this.templateForm$ = items })
    this.AdminPanelService.getAdminPanelSections().subscribe(items => {
      this.sideMenuItems$ = items
    })
  }
  doSomething($event: any) { }

}
