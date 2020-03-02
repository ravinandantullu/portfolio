import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }

  deleteToDoList(id) {
    console.log('Delete the todo list', id);
  }


}
