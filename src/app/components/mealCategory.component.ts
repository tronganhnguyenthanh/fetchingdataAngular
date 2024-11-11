import {Component, inject} from "@angular/core";
import {mealCategoryService} from "../services/mealCategory.service";
import {FormsModule} from "@angular/forms";
@Component({
  selector:'app-meal-category',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./mealCategory.component.html',
  styleUrl:'./mealCategory.component.css'
})
export class MealCategory{
  mealCategory:any = []
  categoryValue:string = "apple"
  mealCategories = inject(mealCategoryService)
  filterMealCategory(){
   if(this.categoryValue === ""){
    "Please enter your keyword"
   }else{
     this.mealCategories.filterCategory(this.categoryValue).subscribe(filter => {
       this.mealCategory = filter
     })
   }
  }
}