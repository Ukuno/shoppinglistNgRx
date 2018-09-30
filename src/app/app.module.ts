import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { shoppingListReducer } from './shopping-list/ngrx/shopping-list.reducer';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
