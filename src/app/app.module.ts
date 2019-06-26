import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalComponent } from './components/global/global.component';
import { CreditComponent } from './components/credit/credit.component';
import { PriceinComponent } from './components/pricein/pricein.component';
import { PricerentComponent } from './components/pricerent/pricerent.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'credit',
    component: CreditComponent
  },
  {
    path: 'global',
    component: GlobalComponent
  },
  {
    path: 'pricein',
    component: PriceinComponent
  },
  {
    path: 'pricerent',
    component: PricerentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GlobalComponent,
    CreditComponent,
    PriceinComponent,
    PricerentComponent,
    HomeComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
