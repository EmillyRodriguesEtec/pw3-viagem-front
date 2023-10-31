import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';

const routes: Routes = [

  { path: 'cadastro-viagem', component: CadastroViagemComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
