import { NavigationEnd, Router } from '@angular/router';
import { CartService } from './../shared/services/cart.service';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute = ''
  constructor(private CartService: CartService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  ngOnInit(): void {
    this.CartService.getCartItems().subscribe(items => { this.shoppingCart = items })
  }
  title = 'RestaurantCMS';
  shoppingCart = []
}
