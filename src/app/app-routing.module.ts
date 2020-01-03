import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ElfComponent } from './elf/elf.component';
import { FamilyComponent } from './family/family.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'signup',
 children:[
  {path:'',component:SignupComponent},
  {path:'elf',component:ElfComponent},
  {path:'family',component:FamilyComponent}
]},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
