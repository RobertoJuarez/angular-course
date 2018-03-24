import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngredientModel } from '../../shared/ingredient-model';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from '../../shared/api/base-api-service';
import 'rxjs/Rx';


@Injectable()
export class ShoppingApiService extends BaseApiService {


  constructor( private httpClient: HttpClient ) {
    super();
  }


  public findAll(): Observable< IngredientModel[] > {

    return this
            .httpClient
            .get( this.returnAllEndpoint() )
            .map(
              // this is necessary due to the fact that Firebase does not handle arrays
              ( firebaseObject: Object ) => {
                // this is due to the fact that Firebase does not use arrays
                const ingredientsArray: IngredientModel[] = [];

                if( firebaseObject ) {

                  Object.keys( firebaseObject ).forEach(function( key, index ) {

                    const innerObject: Object = firebaseObject[ key ];

                    ingredientsArray[ index ] = new IngredientModel( innerObject[ '_name' ], Number.parseInt( innerObject[ '_amount' ] ), key );
                  });
                }

                return ingredientsArray;
              }
            );
  }


  public add( ingredientModel: IngredientModel ): Observable< IngredientModel > {

    return this.httpClient.post< IngredientModel >( this.createEndpoint(), ingredientModel );
  }


  public delete( ingredient: IngredientModel ): Observable< Response > {

    return this.httpClient.delete( this.deleteByIdEndpoint( ingredient.id ) );
  }


  public deleteAll(): Observable< Response > {

    return this.httpClient.delete( this.deleteAllEndpoint() );
  }


}
