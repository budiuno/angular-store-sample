import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html' 
})
export class CartComponent implements OnInit {
  cart: Cart = {items: [
    {
      image: 'http://via.placeholder.com/150',
      name: 'Long T-Shirt',
      price: 40,
      quantity: 2,
      id: 1,
    },
    {
      image: 'http://via.placeholder.com/150',
      name: 'Balck T-Shirt',
      price: 50,
      quantity: 1,
      id: 1,
    }
  ]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'image',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items;
      
    })
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem):void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }


  

}