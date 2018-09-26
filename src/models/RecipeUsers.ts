import { User } from './User';
import { Recipe } from './Recipe';
export class RecipeUsers {
  user: {User};
  recipeId: number;
  recipeJSON: string;
}

/*
// 20180925190409
// http://localhost:8080/lesoptimates.project2.backend/recipes/users/5
[
  {
    "recipeId": 76,
    "recipeJSON": "{\"publisher\":\"101 Cookbooks\",\"f2f_url\":\"http://food2fork.com/view/47899\",\"title\":\"Magic Sauce\",\"source_url\":\"http://www.101cookbooks.com/archives/magic-sauce-recipe.html\",\"recipe_id\":\"47899\",\"image_url\":\"http://static.food2fork.com/magic_sauce_recipeece9.jpg\",\"social_rank\":100,\"publisher_url\":\"http://www.101cookbooks.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 73,
    "recipeJSON": "{\"publisher\":\"The Pioneer Woman\",\"f2f_url\":\"http://food2fork.com/view/47319\",\"title\":\"Crash Hot Potatoes\",\"source_url\":\"http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/\",\"recipe_id\":\"47319\",\"image_url\":\"http://static.food2fork.com/CrashHotPotatoes5736.jpg\",\"social_rank\":100,\"publisher_url\":\"http://thepioneerwoman.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 72,
    "recipeJSON": "{\"publisher\":\"The Pioneer Woman\",\"f2f_url\":\"http://food2fork.com/view/47024\",\"title\":\"Perfect Iced Coffee\",\"source_url\":\"http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/\",\"recipe_id\":\"47024\",\"image_url\":\"http://static.food2fork.com/icedcoffee5766.jpg\",\"social_rank\":100,\"publisher_url\":\"http://thepioneerwoman.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 77,
    "recipeJSON": "{\"publisher\":\"Closet Cooking\",\"f2f_url\":\"http://food2fork.com/view/35120\",\"title\":\"Bacon Wrapped Jalapeno Popper Stuffed Chicken\",\"source_url\":\"http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html\",\"recipe_id\":\"35120\",\"image_url\":\"http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg\",\"social_rank\":100,\"publisher_url\":\"http://closetcooking.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 70,
    "recipeJSON": "{\"publisher\":\"Simply Recipes\",\"f2f_url\":\"http://food2fork.com/view/35760\",\"title\":\"Banana Bread\",\"source_url\":\"http://www.simplyrecipes.com/recipes/banana_bread/\",\"recipe_id\":\"35760\",\"image_url\":\"http://static.food2fork.com/banana_bread300x2000a14c8c5.jpeg\",\"social_rank\":100,\"publisher_url\":\"http://simplyrecipes.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 101,
    "recipeJSON": "{\"publisher\":\"Two Peas and Their Pod\",\"f2f_url\":\"http://food2fork.com/view/54489\",\"title\":\"Two-Ingredient Banana Peanut Butter Ice Cream\",\"source_url\":\"http://www.twopeasandtheirpod.com/two-ingredient-banana-peanut-butter-ice-cream/\",\"recipe_id\":\"54489\",\"image_url\":\"http://static.food2fork.com/bananapeanutbuttericecream5c16d.jpg\",\"social_rank\":100,\"publisher_url\":\"http://www.twopeasandtheirpod.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  },
  {
    "recipeId": 102,
    "recipeJSON": "{\"publisher\":\"All Recipes\",\"f2f_url\":\"http://food2fork.com/view/34889\",\"title\":\"Zesty Slow Cooker Chicken Barbeque\",\"source_url\":\"http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx\",\"recipe_id\":\"34889\",\"image_url\":\"http://static.food2fork.com/4515542dbb.jpg\",\"social_rank\":100,\"publisher_url\":\"http://allrecipes.com\"}",
    "user": {
      "userId": 5,
      "uName": "wil43",
      "name": "William Crest",
      "email": "wcrest@email.com",
      "pswd": "passw0rd0!",
      "isChef": 1
    }
  }
]
*/
