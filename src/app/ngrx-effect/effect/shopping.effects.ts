import { LoadShoppingAction, LoadShoppingSuccessAction, LoadShoppingFailureAction, AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from './../action/shoppint.action';
import { ShoppingService } from './../../shopping';
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType} from "@ngrx/effects";
import { ShoppingActionTypes } from '../actionType';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable() 
export class ShoppingEffect {
    
    @Effect() loadSopping$ = this.action$.pipe(
        ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
        mergeMap(
            ()=> this.shoppingServise.getShoppingList()
                .pipe(
                    map( data => {
                        return new LoadShoppingSuccessAction(data)
                    }),
                    catchError(
                        error => of(new LoadShoppingFailureAction(error))
                    )
                )
        ),
    )

    @Effect() addShopingItem$ = this.action$.pipe(
        ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
        mergeMap(
            (data) =>this.shoppingServise.appShoppingItem(data.payload)
            .pipe(
                map(
                    ()=> new AddItemSuccessAction(data.payload)
                ),
                catchError(
                    error => of(new AddItemFailureAction(error))
                )
            )
        )
    )

    @Effect() deleteShoppingItem$ = this.action$.pipe(
        ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
        mergeMap(
            (data) => this.shoppingServise.deleteShoppingItem(data.payload)
                    .pipe(
                        map(
                            () => new DeleteItemSuccessAction(data.payload)
                        ),
                        catchError(
                            error => of(new DeleteItemFailureAction(error))
                        )
                    )
        )
    )

    constructor(private action$: Actions,
        private shoppingServise: ShoppingService
        ) {}
}