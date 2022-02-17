import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { IgxActionStripModule, IgxExcelExporterService, IgxGridModule } from 'igniteui-angular';
import { IgxInputGroupModule } from 'igniteui-angular';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransfertComponent } from './pages/transfert/transfert.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PerformanceComponent } from './pages/performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    TransfertComponent,
    NotificationComponent,
    PerformanceComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLayoutModule,
    AuthLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    IgxActionStripModule,
    IgxInputGroupModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
