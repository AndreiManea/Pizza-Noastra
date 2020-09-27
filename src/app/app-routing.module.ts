import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ContactComponent} from './Components/main/contact/contact.component';
import {MenuComponent} from './Components/main/meniu/menu.component';
import {HomeComponent} from './Components/main/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/acasa', pathMatch: 'full'},
  {path: 'acasa', component: HomeComponent},
  {path: 'meniu', component: MenuComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, MenuComponent, ContactComponent];
