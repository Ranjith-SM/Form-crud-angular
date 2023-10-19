import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionComponent } from './components/instruction/instruction.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component: InstructionComponent},
  {path:'register' , component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
