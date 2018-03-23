import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IngredientModel } from '../../shared/ingredient-model';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from '../../shared/api/base-api-service';


@Injectable()
export class ShoppingApiService extends BaseApiService {


  constructor( private httpClient: HttpClient ) {
    super();
  }


  public add( ingredientModel: IngredientModel ): Observable< HttpResponse< any > > {

    return this.httpClient.post( BaseApiService.BACKEND_URL, ingredientModel );
  }


  public delete( ingredientModel: IngredientModel ): Observable< IngredientModel > {

    return null;
  }


  public clear(): Observable< IngredientModel > {

    return null;
  }


}
