import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
