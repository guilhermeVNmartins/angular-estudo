import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';




@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService
  ]
})
export class CursosModule { }
// criar um componente para utilizar esse modulo, então começando com "ng g" para gerar, depois c
// de componente e chamei de cursos e criou tudo em cursos.
// exportar esse CursosModule, lá para o app.module.ts em imports e pronto no component irá aparecer no app.component
