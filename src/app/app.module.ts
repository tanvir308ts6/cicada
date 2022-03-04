import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CUiModule} from "./c-ui/c-ui.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
