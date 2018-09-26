import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-router.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


import { RecipeService } from '../recipes/recipe.service';
import { DataSave } from '../shared/data-save-service';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ConfigFile } from '../config';
import { SharedModule } from '../shared/shared.module';

import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/loggin.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataSave,
    AuthService,
    ConfigFile,
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
]
})
export class CoreModule {

}
