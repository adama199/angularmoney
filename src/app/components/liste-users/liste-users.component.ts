import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  dataUsers: any;
  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.UserService.getFindUsers().subscribe(
      data =>{
        this.dataUsers = data;
      console.log(data);
      }

    )
  }
  onStatus(id: number)
  {
    this.UserService.getStatus(id).subscribe( data =>{
      alert(JSON.stringify(data["message"]));
      this.UserService.getFindUsers().subscribe(
        data =>{
          this.dataUsers = data;
        console.log(data);
        }

      )
    })
  }

}
