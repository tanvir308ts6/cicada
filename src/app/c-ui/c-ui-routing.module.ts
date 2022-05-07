import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent},
  // {path:'', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CUiRoutingModule { }
