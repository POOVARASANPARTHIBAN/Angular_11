import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
   
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { LoginComponent } from './login/login.component';
// import { ForgetPasswordComponent } from './forget-password/forget-password.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { LogInComponent } from './routing/log-in/log-in.component';
// import { ForgotPasswordComponent } from './routing/forgot-password/forgot-password.component';
   
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    // LoginComponent,
    // ForgetPasswordComponent,
    // NotFoundComponent,
    // LogInComponent,
    // ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
