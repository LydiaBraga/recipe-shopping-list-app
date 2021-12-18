
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty Schnitzel - just awesome!",
      "https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269_960_720.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient("Potatoes", 3)
      ]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else do you nees to say?",
      "https://sitevitoria.com.br/wp-content/uploads/2020/08/IMG-20200820-WA0090.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
