import { Component } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  
  nomePortal: string;
  
  cursos: string[] = []
  
  constructor(private cursosService: CursosService){
  
    this.nomePortal = 'http://loiane.training'

    //var service = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }
};
//ng g c s para criar servições, ng "g" para gerar, "c" de component e "s" de service
//se eu colocar o nome cursos ele vai colocar na raiz de cursos, mas vou da um diretório.