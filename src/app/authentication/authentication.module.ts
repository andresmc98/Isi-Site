import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChangePassComponent,
    NoPagesFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
