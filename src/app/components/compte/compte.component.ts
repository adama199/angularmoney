import { CompteService } from './../../services/compte.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compteForm: FormGroup;
  data: any;
  comptes: any;
  constructor(
    private compteService: CompteService
  ) { }

  ngOnInit() {
    this.compteForm = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      ninea: new FormControl(''),
      rC: new FormControl(''),
      montant: new FormControl('')
    });

  }

  onCreer()
  {
    const compte= {
      prenom: this.compteForm.value.prenom,
      nom: this.compteForm.value.nom,
      email: this.compteForm.value.email,
      password: this.compteForm.value.password,
      ninea: this.compteForm.value.ninea,
      rC: this.compteForm.value.rC,
      montant: this.compteForm.value.montant


    }
    //console.log(compte);

    this.compteService.compteNew_Partenaire(compte).subscribe( data => {
      console.log(data);
      alert(JSON.stringify(data));
    })
  }



}
