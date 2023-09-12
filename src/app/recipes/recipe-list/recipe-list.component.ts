import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Stuffed Bread", "This is a popular snack.", "https://i2-prod.mirror.co.uk/incoming/article9778767.ece/ALTERNATES/s1200/Toasted-sausage-roll-on-white-background.jpg"), 
    new Recipe("Chocochip Cookie", "This is a popular snack.", "https://media.istockphoto.com/photos/pile-of-chocolate-chip-cookies-isolated-on-white-background-picture-id638001152"), 
  ];
}
