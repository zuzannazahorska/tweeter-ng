import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
