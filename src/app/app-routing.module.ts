import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './component/formulario/formulario.component';
import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: '',
   component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'addDrink',
    component: FormularioComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
