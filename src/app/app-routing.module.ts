import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '' , redirectTo: 'register', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'home' , component: HomeComponent },
  {path: 'details/:id' , component:DetailsComponent},
  {path: 'register' , component:RegisterComponent},
  { path: '**' , component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
