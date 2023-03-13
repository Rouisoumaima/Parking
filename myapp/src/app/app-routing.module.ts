import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationFormComponent }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
