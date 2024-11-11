import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable({providedIn:"root"})
export class mealCategoryService{
  baseURL = "https://www.themealdb.com/api/json/v1/1"
  filterEndPoint = "search.php"
  constructor(private http:HttpClient){}
  filterCategory(categoryValue:string){
   return this.http.get(`${this.baseURL}/${this.filterEndPoint}?s=${categoryValue}`)
  }
}