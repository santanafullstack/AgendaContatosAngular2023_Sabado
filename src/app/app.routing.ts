import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AutenticarGuard } from "./guards/autenticar.guard";

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component';
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";

//mapeamento de rotas
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'password-recover', component: PasswordRecoverComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AutenticarGuard] }
];

//registrando as rotas
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }