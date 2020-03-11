import { AuthGuardService } from './services/auth-guard.service';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const Routes: Routes = [
  {path: 'login', component:  AuthentificationComponent}
];

@NgModule({

  exports: [RouterModule]
})
export class AppRoutingModule { }
