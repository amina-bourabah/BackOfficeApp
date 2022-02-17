import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})


export class HeaderMenuComponent implements OnInit {

  pages: string[]=['prestation','facture','performances','rendezvous','historique','consommable'];
  linkshown=true;

  constructor(private router: Router) { 


    router.events.subscribe((val) => {
    console.log(this.router.url);

    if(this.router.url=="/consommable")
    {
      this.linkshown=false;
    }
    
    else if(this.router.url=="/trousseau")
    {
      this.linkshown=false;

    }
   
    else
    {
      this.linkshown=true;


    }
 
});
  }

  ngOnInit(): void
  {

  }



  isLeftSideBarVisible: boolean = false;

  toggleSidebar() {

  let sidebar: any = document.getElementById("main-sidebar");
  let contentWrap: any = document.getElementById("content-wrapper");
  let text :any= document.querySelectorAll("[id='text-state']");

  sidebar.style.display="block";


  if (this.isLeftSideBarVisible) {
    if(screen.width <= 600) { 
  
    sidebar.style.width = "0px";
    contentWrap.style.marginLeft = "0px";
  }

  else{

    sidebar.style.width = "50px";
    contentWrap.style.marginLeft = "50px";
    for(var i = 0; i < text.length; i++) 
    {
    text[i].style.display='none'; 
    }}
  }

  else {
    
    sidebar.style.width = "230px";
    for(var i = 0; i < text.length; i++) 
    {
    text[i].style.display='inline'; 

    }
    //contentWrap.style.marginLeft = "230px";
  }

  this.isLeftSideBarVisible = !this.isLeftSideBarVisible
      }


      active_trousseau()
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
