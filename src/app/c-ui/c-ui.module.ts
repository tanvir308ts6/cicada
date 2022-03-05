import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    HeaderTopComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
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
