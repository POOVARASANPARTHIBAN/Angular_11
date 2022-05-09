import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
// import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
