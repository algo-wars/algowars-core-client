import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { LoginButtonComponent } from './components/button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/button/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/button/signup-button/signup-button.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AvatarComponent,
  ],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
