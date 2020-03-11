import { CompteService } from './../../services/compte.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})
export class ListComptesComponent implements OnInit {
  comptes: any;
  constructor(
    private compteService: CompteService
  ) { }

  ngOnInit() {
    this.compteService.getComptes().subscribe(
      data=>
    {
      //console.log(data);

      this.comptes = data;
    });
  }

}
