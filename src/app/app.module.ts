import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


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
import { SavedRecipesComponent} from './saved-recipes/saved-recipes.component';
import { NonusersearchComponent } from './nonusersearch/nonusersearch.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FoodcallComponent,
    SearchComponent,
    CreateUserComponent,
    FormValidation,
    SavedRecipesComponent,
    NonusersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    FormValidation,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
