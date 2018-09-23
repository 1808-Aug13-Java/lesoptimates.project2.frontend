import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
>>>>>>> feature-jonathan

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FoodcallComponent } from './foodcall/foodcall.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { CreateUserComponent } from './create-user/create-user.component';
import { FormValidation } from './create-user/validatePswd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

=======
import { SavedRecipesComponent} from './saved-recipes/saved-recipes.component';
>>>>>>> feature-jonathan

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FoodcallComponent,
    SearchComponent,
<<<<<<< HEAD
    CreateUserComponent,
    FormValidation
=======
    SavedRecipesComponent
>>>>>>> feature-jonathan
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    FormValidation
=======
    HttpClientModule
>>>>>>> feature-jonathan
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
