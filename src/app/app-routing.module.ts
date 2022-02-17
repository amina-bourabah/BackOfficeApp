import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';

const routes: Routes = [

  { path: 'auth', component: AuthLayoutComponent },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { 
    path:'', 
    component: DefaultLayoutComponent, 
    children: [
      {
        path: '',
        loadChildren: ()=>DefaultLayoutModule
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
