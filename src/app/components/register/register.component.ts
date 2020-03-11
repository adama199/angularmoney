import { UserService } from './../../services/user.service';
import { ProfilService } from './../../services/profil.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  roles: any;
  constructor(
    private profilservice: ProfilService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
    this.profilservice.getRoles().subscribe(
      data=>
    {
      console.log(data);

      this.roles = data;
    })
  }
  onSubmit()
  {
    const user= {
      prenom: this.userForm.value.prenom,
      nom: this.userForm.value.nom,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      role: `api/roles/${this.userForm.value.role}`
    }
    this.userService.register(user).subscribe( data => {
      console.log(data);
      alert(JSON.stringify(data));
    })
  }
}
