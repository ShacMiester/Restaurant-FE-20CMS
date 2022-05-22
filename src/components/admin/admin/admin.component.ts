import { AdminPanelService } from './../services/admin-panel.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminPanelService],
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  templateForm$: any = [];
  sideMenuItems$: any = [];
  constructor(
    private menuService: MenuService,
    private AdminPanelService: AdminPanelService,
    private _http: HttpClient
  ) {}
  selectedBranch = 0
  branches: any = [];
  ngOnInit(): void {
    this.menuService.getMenuCategoryForm().subscribe((items) => {
      this.templateForm$ = items;
    });
    this.AdminPanelService.getAdminPanelSections().subscribe((items) => {
      this.sideMenuItems$ = items;
    });
    this.getLocations();
    this.selectedBranch =  Number(localStorage.getItem('Branch'))
    console.log(this.selectedBranch)
  }

  getLocations() {
    this._http.get(`${environment.storeApi}/Branch`).subscribe({
      next: (branches) => {
        this.branches = branches;
      },
    });
  }

  changeLocation(branchID: number) {
    localStorage.setItem('Branch', branchID.toLocaleString());
  }
  doSomething($event: any) {}
}
