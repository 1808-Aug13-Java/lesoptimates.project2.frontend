import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FoodcallComponent } from './foodcall/foodcall.component';
import { SearchComponent } from './search/search.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormValidation } from './create-user/validatePswd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { NonusersearchComponent } from './nonusersearch/nonusersearch.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FoodcallComponent,
    SearchComponent,
    SavedRecipesComponent,
    CreateUserComponent,
    FormValidation,
    NonusersearchComponent,
    UpdateProfileComponent
  ],
  providers: [FormValidation,
    HttpClientModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
