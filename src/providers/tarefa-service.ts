import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Tarefa } from '../models/tarefa';

const TAREFAS = [
  {nome: 'Acordar', descricao: 'Sair da cama'},
  {nome: 'Tomar café', descricao: 'Coca-cola não é café'},
  {nome: 'Sair de casa', descricao: 'É pra ir pro trabalho'}
];

@Injectable()
export class TarefaService {
  tarefas = TAREFAS;

  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }
}
