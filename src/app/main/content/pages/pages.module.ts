import { NgModule } from '@angular/core';

import { LoginModule } from './authentication/login/login.module';
import { Login2Module } from './authentication/login-2/login-2.module';
import { RegisterModule } from './authentication/register/register.module';
import { Register2Module } from './authentication/register-2/register-2.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { ForgotPassword2Module } from './authentication/forgot-password-2/forgot-password-2.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { ResetPassword2Module } from './authentication/reset-password-2/reset-password-2.module';
import { LockModule } from './authentication/lock/lock.module';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';

@NgModule({
    imports: [
        // Auth
        LoginModule,
        Login2Module,
        RegisterModule,
        Register2Module,
        ForgotPasswordModule,
        ForgotPassword2Module,
        ResetPasswordModule,
        ResetPassword2Module,
        LockModule,
        MailConfirmModule,
    ]
})
export class FusePagesModule
{

}
