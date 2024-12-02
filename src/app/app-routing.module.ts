import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/public/components/login/login.component';
import { PublicComponent } from './modules/public/components/public/public.component';
import { PUBLIC_ROUTES } from './modules/public/public.routes';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '', component: PublicComponent, children:PUBLIC_ROUTES },
  // {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
