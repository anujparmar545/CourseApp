import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import {  LEADERS } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leaders: any;
  featuredLeaders: any;
  dishErrMess: string;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderService:LeaderService,
              @Inject('BaseURL') public baseURL,
              ) { }

  ngOnInit() {
   
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish,dishErrMess => this.dishErrMess = <any>dishErrMess);
    
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);

    for(this.leaders of LEADERS){

      if(this.leaders.featured)
        this.featuredLeaders=this.leaders;
    }
    

  }


}
