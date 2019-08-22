import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './interface/menubar/menubar.component';
import { SidebarComponent } from './interface/sidebar/sidebar.component';
import { FooterComponent } from './interface/footer/footer.component';
import { BreadcrumbComponent } from './interface/breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './interface/home/home.component';
import { ExperienciasComponent } from './shared/experiencias/experiencias.component';
import { ProjetosComponent } from './shared/projetos/projetos.component';
import { ContatosComponent } from './shared/contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    HomeComponent,
    ExperienciasComponent,
    ProjetosComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
