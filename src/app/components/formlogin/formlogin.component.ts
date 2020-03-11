import { AuthentificationService } from './../../services/authentification.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  iconUser = faUser;
  loginForm: FormGroup
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit()
  {
    const user =
    {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    } as User;
    //  console.log(user);
    return this.authentificationService.login(user).subscribe(
      data=> {
         console.warn(data);
        this.router.navigateByUrl(`adminsys`);
      },
      error => {
        console.warn('connexion échouer!!!!!!');
      }
    );

  }
  getRoles()
  {
    this.authentificationService.getRoles().subscribe(
       res => console.warn(res)

    )
  }

}
