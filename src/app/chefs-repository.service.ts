import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ChefsRepositoryService implements InMemoryDbService {
  createDb() {
    const chefs = [
      {"id": 10, "name": "billy"},
      {"id": 11, "name": "charlotte"}
    ];
    const recipeChefs = [
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
        }
    ];
    return {chefs, recipeChefs};
  }
}
