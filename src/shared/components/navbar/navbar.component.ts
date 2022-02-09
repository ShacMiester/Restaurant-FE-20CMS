import { NavbarService } from './../../services/navbar.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/shared/entities/user.entity';
import { NavBar } from '../../entities/navbar-item.entity';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private UserService: UserService, private navbArService: NavbarService) { }

  someBadge: number = 1;
  isLoggedIn: boolean = false;
  user!: user;
  isCollapsed = true;
  navBarConfigs!: NavBar;

  ngOnInit(): void {
    this.getUserInfo();
    this.getNavBarConfigs();
  }
  getNavBarConfigs() {
    this.navbArService.getNavBarConfigs().subscribe(navBarConfigs => {
      this.navBarConfigs = navBarConfigs
    })
  }
  getUserInfo() {
    this.UserService.login().subscribe((user) => {
      user ? (this.isLoggedIn = true) : false, (this.user = user);
    });
  }
}
