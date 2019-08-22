import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './interface/home/home.component';
import { ExperienciasComponent } from './shared/experiencias/experiencias.component';
import { ContatosComponent } from './shared/contatos/contatos.component';
import { ProjetosComponent } from './shared/projetos/projetos.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'experiencias',
    component: ExperienciasComponent,
    data: { title: 'Experiências' }
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
    data: { title: 'Projetos' }
  },
  {
    path: 'contatos',
    component: ContatosComponent,
    data: { title: 'Contatos' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
