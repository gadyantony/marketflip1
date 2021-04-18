import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component';
import { TestdashComponent } from './features/testdash/testdash.component';

const routes: Routes = [
  {path:'login' ,canActivate[actguard],component: LoginComponent,},
  {path: 'testdash', component: TestdashComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
