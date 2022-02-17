import { Component, OnInit } from '@angular/core';
import { ObjetTransfert } from 'src/app/models/objet-transfert';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})

export class TransfertComponent implements OnInit {

  constructor(private rest: RestService) { }

  public listebenificaire: string[]=['AJERMOUNE Khadija','laila tachi','baki hasan'];

  public listedonneur: string[]=['BOURABAH Amina','BAKAS Khoula','AIT ALLA Mounir'];

  public listemotif: string[]=['Soutien familial',' Epargne/investissement','Paiement de biens et de services ','Revenu dun site internet','Frais de dépassement '];

  public donneur !:string;

  public motif !:string ;
  
  public benificaire!:string;

  transfertobjt: ObjetTransfert = new ObjetTransfert();


  ngOnInit(): void 
  {
  }

  effectuertransfert(){


    
    this.rest.effectuertransfert(this.transfertobjt).subscribe(data => {
     

    },error => console.log(error));
  }
  
}
