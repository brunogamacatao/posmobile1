import { Component } from '@angular/core';

import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../providers/tarefa-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  tarefa: Tarefa = new Tarefa();
  tarefas: Tarefa[];

  constructor(private tarefaServ: TarefaService) {
    this.tarefas = tarefaServ.getTarefas();
  }

  adicionar() {
    this.tarefaServ.adicionarTarefa(this.tarefa);
    this.tarefa = new Tarefa();
    this.tarefas = this.tarefaServ.getTarefas();
  }
}
