import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { AdminSystemComponent } from './pages/admin-system/admin-system.component';
import { RegisterComponent } from './components/register/register.component';
import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { CompteComponent } from './components/compte/compte.component';
import { ListComptesComponent } from './components/list-comptes/list-comptes.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';


const appRoutes: Routes = [
  {path: 'login', component: FormloginComponent},
  {path: '', component: FormloginComponent},
  {path: 'adminsys', component: AdminSystemComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newcomptep', component: CompteComponent},
  {path: 'list-comptes', component: ListComptesComponent},
  { path: 'list-users', component: ListeUsersComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'login'}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    FormloginComponent,
    AdminSystemComponent,
    RegisterComponent,
    ListeUsersComponent,
    SlidebarComponent,
    CompteComponent,
    ListComptesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
