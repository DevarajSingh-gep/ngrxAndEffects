import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingService } from './shopping';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffect } from './ngrx-effect/effect/shopping.effects';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './ngrx-effect/reducer/shopping.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffect]),
    FormsModule,
    StoreModule.forRoot({shopping: ShoppingReducer}),
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
