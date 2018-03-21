import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RecipeModel } from '../recipe-model';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipe.service';


@Injectable()
export class RecipeDetailResolverService implements Resolve< RecipeModel > {


  constructor( private recipeService: RecipeService ) {}


  public resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< RecipeModel > | Promise< RecipeModel> | RecipeModel {

    return this.recipeService.getRecipeById( route.params[ 'id' ] );
  }

}
