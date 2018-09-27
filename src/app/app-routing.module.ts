import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RecommendedDetailsComponent } from './recommended-details/recommended-details.component';
import { AuthGuardService } from './auth-guard.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: 'savedrecipes', component: SavedRecipesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'updateprofile', component: UpdateProfileComponent},
  { path: 'recommended/:id', component: RecommendedDetailsComponent },
  { path: 'savedrecipes', component: SavedRecipesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
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
