import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
=======
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'savedrecipes', component: SavedRecipesComponent},
>>>>>>> feature-jonathan
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
