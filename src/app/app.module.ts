import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// esse browser module, prepara a aplicação para ser executada em um browser.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
//na vídeo aula a gente faz manualmente essa inclusão, mas agora ja funcionou.
//importanto o CursosModule lá de dentro da pasta cursos.

@NgModule({
  declarations: [
    AppComponent,MeuPrimeiroComponent, MeuPrimeiro2Component
    //importando aqui a classe nas declarações
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  //o providers, é onde colocamos os serviços que ficam disponíveis para todos os componentes declarados , serviços de login ou guarda de rotas.
  bootstrap: [AppComponent]
  //bootstrap é apenas no modulo raiz
})
export class AppModule { }
