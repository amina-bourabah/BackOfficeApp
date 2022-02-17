import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent implements OnInit {

  constructor() {}

  pages: string[]=['prestation','facture','performances','rendezvous','historique','consommable'];



  ngOnInit(): void 
  {

    $('#main-sidebar').hover(function () {

      $('#main-sidebar').toggleClass('opened');
    
    
    });
  }


  active_prestation()
  
  {

    let prestation: any  = document.getElementById("prestation");
   
    let elementtext:any='prestation';

    prestation.classList.add("active");

    for(var i=0;i<this.pages.length;i++)
    {
      if(elementtext!==this.pages[i])
      {
        let element: any  = document.getElementById(this.pages[i]);
        element.classList.remove("active");

      }
    }

  }


  active_facture()
  {

    let facture: any  = document.getElementById("facture");
    let facturetext:any='facture';
    facture.classList.add("active");

    for(var i=0;i<this.pages.length;i++)
    {
      if(facturetext!==this.pages[i])
      {
        let element: any  = document.getElementById(this.pages[i]);
        element.classList.remove("active");

      }
    }
    

    


  }

  active_performance()
  {  
      let performance: any  = document.getElementById("performances");
      let elmenttext:any='performances';
      performance.classList.add("active");
  
      for(var i=0;i<this.pages.length;i++)
      {
        if(elmenttext!==this.pages[i])
        {
          let element: any  = document.getElementById(this.pages[i]);
          element.classList.remove("active");
  
        }
      }


  }


  active_rendezVous()
  {
    let rendezvous: any  = document.getElementById("rendezvous");
    let elmenttext:any='rendezvous';
    rendezvous.classList.add("active");

    for(var i=0;i<this.pages.length;i++)
    {
      if(elmenttext!==this.pages[i])
      {
        let element: any  = document.getElementById(this.pages[i]);
        element.classList.remove("active");

      }
    }

  }

  active_historique()
  {
    let historique: any  = document.getElementById("historique");
    let elmenttext:any='historique';
    historique.classList.add("active");

    for(var i=0;i<this.pages.length;i++)
    {
      if(elmenttext!==this.pages[i])
      {
        let element: any  = document.getElementById(this.pages[i]);
        element.classList.remove("active");

      }
    }
  }

  active_consommable()

  {
    let consommable: any  = document.getElementById("consommable");

    let elmenttext:any='consommable';
    consommable.classList.add("active");

    for(var i=0;i<this.pages.length;i++)
    {
      if(elmenttext!==this.pages[i])
      {
        let element: any  = document.getElementById(this.pages[i]);
        
        element.classList.remove("active");

      }
    } 

  }


 



 
}
