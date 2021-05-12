import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptocontactComponent } from './deptocontact/deptocontact.component';
import { DeptodetalleComponent } from './deptodetalle/deptodetalle.component';
import { DeptoinfoComponent } from './deptoinfo/deptoinfo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' }, // default
  { path: 'departments', component: DepartmentsComponent },
  {
    path: 'departments/:id',
    component: DeptodetalleComponent,
    children: [
      { path: 'info', component: DeptoinfoComponent },
      { path: 'contact', component: DeptocontactComponent },
    ],
  },
  { path: 'personas', component: PersonasComponent },
  { path: '**', component: PageNotFoundComponent }, // has to be in the bottom, sino atrapa todas las url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentsComponent,
  PersonasComponent,
  PageNotFoundComponent,
  DeptodetalleComponent,
  DeptoinfoComponent,
  DeptocontactComponent,
];
