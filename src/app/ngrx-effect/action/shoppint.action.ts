import { Action } from '@ngrx/store';

import { ShoppingActionTypes } from './../actionType';

export class LoadShoppingAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING;

}

export class LoadShoppingSuccessAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
    constructor(public payload: any) {}
}

export class LoadShoppingFailureAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
    constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: any) {
    }
}

export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: any) {}
}

export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload: any) {}
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload: any) {}
}

export class DeleteItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload: any){}
}

export class DeleteItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload: any) {}
}


export type ShoppingAction = LoadShoppingAction | 
                            LoadShoppingSuccessAction |
                            LoadShoppingFailureAction |
                            AddItemAction |
                            AddItemSuccessAction |
                            AddItemFailureAction |
                            DeleteItemAction |
                            DeleteItemSuccessAction |
                            DeleteItemFailureAction