import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { AuthGuardService } from "./auth-guard.service";
import { CreateUserComponent } from './create-user/create-user.component';
import { LogoutComponent } from './logout/logout.component';
import { NonusersearchComponent } from './nonusersearch/nonusersearch.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: 'savedrecipes', component: SavedRecipesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'searchrecipes', component: NonusersearchComponent },
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
