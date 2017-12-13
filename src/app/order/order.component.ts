import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from 'app/order/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions : RadioOption[] = [
    {label : 'dinheiro', value : 'MON'},
    {label : 'Cartão de Débito', value : 'DEB'},
    {label : 'Cartão Refeição', value : 'REF'}
  ]
  
  constructor(private orderService : OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }
  
  increaseQty(item : CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item : CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item : CartItem){
    this.orderService.removeItem(item)
  }
}
