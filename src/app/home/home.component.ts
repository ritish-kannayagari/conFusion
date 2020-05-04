import { Component, OnInit } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {Dish} from '../shared/dish'
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service'
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  constructor(private dishService:DishService,
    private promotionSerivice:PromotionService,
    private leaderService:LeaderService) { }

  ngOnInit() {
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.promotionSerivice.getFeaturedPromotion()
    this.leader=this.leaderService.getFeaturedLeader()
  }

}
