import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    private SHOPPIN_URL = "http://localhost:3000/shopping";

    constructor(private http: HttpClient) {

    }

    getShoppingList() {
        debugger;
        return this.http.get<any>(this.SHOPPIN_URL);
    }

    appShoppingItem(shoppingItem) {
        debugger;
        return this.http.post(this.SHOPPIN_URL, shoppingItem).pipe(delay(500));

    }

    deleteShoppingItem(id: string) {
        debugger;
        return this.http.delete(`${this.SHOPPIN_URL}/${id}`).pipe(delay(500));
    }
}
