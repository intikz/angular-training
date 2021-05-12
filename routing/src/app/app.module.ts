import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptodetalleComponent } from './deptodetalle/deptodetalle.component';
import { DeptoinfoComponent } from './deptoinfo/deptoinfo.component';
import { DeptocontactComponent } from './deptocontact/deptocontact.component';
// import { DepartmentsComponent } from './departments/departments.component';
// import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DeptodetalleComponent,
    DeptoinfoComponent,
    DeptocontactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
