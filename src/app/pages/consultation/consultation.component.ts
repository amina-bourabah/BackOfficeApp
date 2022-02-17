import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'
import { Transferts } from 'src/app/models/transferts';
import { RestService } from 'src/app/services/rest.service';

import {
  DefaultSortingStrategy,
  ISortingExpression,
  SortingDirection
} from 'igniteui-angular';

import { IgxGridComponent } from "igniteui-angular";


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})


export class ConsultationComponent implements OnInit {

  public expr: ISortingExpression[];
  public listetransfers!:Transferts[];

  @ViewChild("grid") public grid!: IgxGridComponent;

  constructor(private rest: RestService) 
  {

    this.expr = [
      { dir: SortingDirection.Asc, fieldName: 'dateTransfert', ignoreCase: false,
        strategy: DefaultSortingStrategy.instance() },
      
  ];

   }

  ngOnInit(): void 
  {
      this.rest.getTransferts().subscribe(data => {

      this.listetransfers = data;

    },error => console.log(error));

  }
  

  getallTransferts() 
  {
      this.rest.getTransferts().subscribe(data => {

      this.listetransfers = data;

    },
    error => console.log(error));

  
  }


  charger_liste()
  {
   this.getallTransferts();
  }


}
