import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MealCategory} from './components/mealCategory/mealCategory.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[
   RouterOutlet, 
   MealCategory,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfetchingMealCategory';
}
