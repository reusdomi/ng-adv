import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../food/food.model';
import { FoodServiceBS } from '../../food/food.service-bs';

@Component({
  selector: 'app-simple-food',
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.scss'],
})
export class SimpleFoodComponent implements OnInit {
  constructor(private fs: FoodServiceBS) { }

  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food).subscribe(() => {
      this.food = this.food.filter((f) => f != food);
    });
  }
}
