import { CartService } from './../shared/services/cart.service';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private CartService:CartService) {
  }
 ngOnInit(): void {
    this.CartService.getCartItems().subscribe(items=>{this.shoppingCart = items})
 }
  title = 'RestaurantCMS';
  shoppingCart = []
}
