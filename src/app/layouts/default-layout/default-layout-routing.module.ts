import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from 'src/app/pages/consultation/consultation.component';
import { TransfertComponent } from 'src/app/pages/transfert/transfert.component';

const routes: Routes = [

  { path: '', redirectTo: 'transfert', pathMatch: 'full'},
  { path: 'consultation',component: ConsultationComponent},
  { path: 'transfert',component: TransfertComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }
