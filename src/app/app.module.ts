import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-router.module';
import { RecipeService } from './recipes/recipe.service';
import { DataSave } from './shared/data-save-service';
import { AuthService } from './auth/auth.service';
import { ConfigFile } from './config';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RecipesModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, DataSave, AuthService, ConfigFile, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
