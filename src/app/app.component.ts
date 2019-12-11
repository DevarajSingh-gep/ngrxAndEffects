import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from './ngrx-effect/interface/shopping-item.interface';
import { v4 as uuid } from 'uuid';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx-effect/state/app-state';
import { LoadShoppingAction, AddItemAction, DeleteItemAction } from './ngrx-effect/action/shoppint.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ShoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = { id: '', name: ''}

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.ShoppingItems = this.store.select( store => store.shopping.list);
    this.loading$ = this.store.select( store => store.shopping.loading);
    this.error$ = this.store.select( store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }

  addItem(e) {
    this.newShoppingItem.id = uuid.v4();
    console.log(this.ShoppingItems )
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: ''};
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}