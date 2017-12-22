import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { RestaurantsService } from 'app/core/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu : Observable<MenuItem[]>
  
  constructor(private restaurantsService : RestaurantsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurants(this.route.parent.snapshot.params['id']);
  }
  
  addMenuItem( item : MenuItem){
    console.log(item)
  } 
}
