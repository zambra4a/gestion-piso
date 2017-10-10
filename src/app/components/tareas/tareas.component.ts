import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: any[];

  constructor(private db: AngularFireDatabase) { 
    db.list("/tareas").subscribe(tasks=>{
      this.tareas = tasks;
    });
  }

  ngOnInit() {
  }

  toggle(tarea:any){
    this.db.object(`/tareas/${tarea.$key}`).update({done:!tarea.done});
  }


}
