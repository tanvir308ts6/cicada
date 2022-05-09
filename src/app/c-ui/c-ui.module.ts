import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { SliderComponent } from './slider/slider.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CUiRoutingModule } from './c-ui-routing.module';
import { ServicesComponent } from './services/services.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    HeaderTopComponent,
    SliderComponent,
    ContactComponent,
    LandingPageComponent,
    ServicesComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    CUiRoutingModule
  ],
  exports: [
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    NavComponent,
    HeaderTopComponent,
    SliderComponent,

  ]
})
export class CUiModule { }
