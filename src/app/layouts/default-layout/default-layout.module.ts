import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { HeaderMenuComponent } from 'src/app/components/header-menu/header-menu.component';
import { SidebarMenuComponent } from 'src/app/components/sidebar-menu/sidebar-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    SidebarMenuComponent,
    HeaderMenuComponent
    
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    FormsModule,

  ]
})

export class DefaultLayoutModule { }
